import axios from "axios";
import { config } from "@/config/hosts";
import { User } from "@/types/auth";

export class AuthService {
  static async loginUser(email: string, password: string) {
    const loginUrl = `${config.api.baseUrl}/api/login`;
    const loginData = { email, password };
    
    console.log("=== LOGIN DEBUG INFO ===");
    console.log("API Base URL:", config.api.baseUrl);
    console.log("Full login URL:", loginUrl);
    console.log("Login data:", loginData);
    console.log("Environment:", import.meta.env.PROD ? 'production' : 'development');
    
    try {
      const response = await axios.post(loginUrl, loginData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 secondes timeout
      });

      console.log("Login response status:", response.status);
      console.log("Login response data:", response.data);
      return response.data;
    } catch (error: any) {
      console.log("=== LOGIN ERROR DEBUG ===");
      console.log("Error status:", error.response?.status);
      console.log("Error data:", error.response?.data);
      console.log("Error headers:", error.response?.headers);
      console.log("Request config:", error.config);
      throw error;
    }
  }

  static async refreshUserData(userId: string): Promise<any> {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("No token available");
    }
    
    const response = await axios.get(
      `${config.api.baseUrl}/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return response.data;
  }

  static storeUserData(user: User, token: string): void {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUserFromStorage(): User | null {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        return JSON.parse(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
        this.clearStorage();
        return null;
      }
    }
    return null;
  }

  static getTokenFromStorage(): string | null {
    return localStorage.getItem("token");
  }

  static clearStorage(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  static validateAdminRole(role: string): boolean {
    return role === "admin";
  }
}
