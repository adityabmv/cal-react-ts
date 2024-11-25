import {APIClientService} from "@/lib/axios";

class TokenService {
    private accessTokenKey = "access_token";
    private refreshTokenKey = "refresh_token";
    private apiClient: APIClientService;
    
    constructor() {
        this.apiClient = new APIClientService("https://your-api-url.com/api");
    }
  
    getToken() {
      return localStorage.getItem(this.accessTokenKey);
    }
  
    saveToken(token: string) {
      localStorage.setItem(this.accessTokenKey, token);
    }
  
    removeToken() {
      localStorage.removeItem(this.accessTokenKey);
    }
  
    getRefreshToken() {
      return localStorage.getItem(this.refreshTokenKey);
    }
  
    saveRefreshToken(token: string) {
      localStorage.setItem(this.refreshTokenKey, token);
    }
  
    removeRefreshToken() {
      localStorage.removeItem(this.refreshTokenKey);
    }
  
    async refreshToken(): Promise<boolean> {
      const refreshToken = this.getRefreshToken();
      if (!refreshToken) {
        this.removeToken();
        return false;
      }
  
      try {
        const response = await this.apiClient.post<{ accessToken: string }>("/auth/refresh", { token: refreshToken });
        this.saveToken(response.data.accessToken);
        return true;
      } catch (error) {
        this.removeToken();
        this.removeRefreshToken();
        return false;
      }
    }
  }
  
export default new TokenService();
  