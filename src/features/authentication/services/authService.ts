import {APIClientService} from "@/lib/axios";
import tokenService from "./tokenService";

class AuthService {
  private apiClient: APIClientService;

  constructor() {
    this.apiClient = new APIClientService("https://your-api-url.com/api");
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: { id: string; role: string; name: string } | null }> {
    try {
      const response = await this.apiClient.post<{ accessToken: string; refreshToken: string; user: { id: string; role: string; name: string } }>(
        "/auth/login",
        { email, password }
      );
      tokenService.saveToken(response.data.accessToken);
      tokenService.saveRefreshToken(response.data.refreshToken);
      return { success: true, user: response.data.user };
    } catch (error) {
      console.error("Login failed", error);
      return { success: false, user: null };
    }
  }

  logout() {
    tokenService.removeToken();
    tokenService.removeRefreshToken();
  }

}

export default new AuthService();
