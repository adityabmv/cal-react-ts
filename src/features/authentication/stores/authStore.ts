import { makeAutoObservable } from "mobx";
import authService from "../services/authService";
import tokenService from "../services/tokenService";

class AuthStore {
  isAuthenticated = false;
  user: {id:string, role:string, name:string } | null = null;

  constructor() {
    makeAutoObservable(this);
    this.isAuthenticated = !!tokenService.getToken();
  }

  async login(email: string, password: string) {
    const { success, user } = await authService.login(email, password) as { success: boolean, user: { id: string; role: string; name: string; } | null };
    if (success) {
      this.isAuthenticated = true;
      this.user = user;
    }
    return success;
  }

  logout() {
    authService.logout();
    this.isAuthenticated = false;
    this.user = null;
  }

  async refreshToken() {
    const success = await tokenService.refreshToken();
    if (success) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
    return success;
  }
}

const authStore = new AuthStore();
export default authStore;
export {AuthStore}