
import axios from "axios";
import { config } from "@/config/hosts";
import { User } from "@/types/auth";

export class AuthService {
  static async loginUser(email: string, password: string) {
    console.log("Making login request to:", `${config.api.baseUrl}/api/login`);
    
    const response = await axios.post(`${config.api.baseUrl}/api/login`, {
      email,
      password,
    });

    console.log("Login response:", response.data);
    return response.data;
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
