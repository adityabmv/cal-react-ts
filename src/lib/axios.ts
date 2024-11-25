import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class APIClientService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 10000) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
    });

    // Set up interceptors
    this.initializeInterceptors();
  }

  private initializeInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // Add headers or modify the request here if needed
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        // Handle request error
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Handle successful response
        return response;
      },
      (error) => {
        // Handle response error
        if (error.response?.status === 401) {
          // Redirect to login or handle unauthorized access
          console.error("Unauthorized! Redirecting to login...");
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic GET method
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  // Generic POST method
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  // Generic PUT method
  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  // Generic DELETE method
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }
}

// Export a singleton instance of the AxiosService with a base URL
// const apiClient = new APIClientService("https://api.example.com");

// export default apiClient;
export { APIClientService };
