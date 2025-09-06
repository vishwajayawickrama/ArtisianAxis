// services/BaseAPIService.js
import axios from 'axios';

class BaseAPIService {
  baseURL: string;
  apiClient: any;

  constructor() {
    this.baseURL = "https://localhost:8000/api";
    this.apiClient = axios.create({
      baseURL: this.baseURL,
      timeout: 10000, // Increased timeout
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // // Request interceptor for auth tokens
    // interface AuthHeaders {
    //   Authorization?: string;
    //   [key: string]: any;
    // }

    // interface AuthConfig {
    //   headers?: AuthHeaders;
    //   [key: string]: any;
    // }

    // this.apiClient.interceptors.request.use(
    //   (config: AuthConfig) => {
    //     const token = localStorage.getItem('authToken');
    //     if (token) {
    //       if (!config.headers) config.headers = {};
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   (error: any) => Promise.reject(error)
    // );

    // Response interceptor for error handling
    this.apiClient.interceptors.response.use(
      (response: any) => response,
      (error: { response: { status: number; }; }) => {
        if (error.response?.status === 401) {
          // Handle unauthorized access
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic HTTP methods
  async get(endpoint: any, params = {}) {
    try {
      const response = await this.apiClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(endpoint: any, data = {}) {
    try {
      const response = await this.apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put(endpoint: any, data = {}) {
    try {
      const response = await this.apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(endpoint: any) {
    try {
      const response = await this.apiClient.delete(endpoint);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async postFormWithFile(endPoint: string, data: FormData) {
    try {
        const response = await this.apiClient.post(endPoint, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw this.handleError(error);
    }
}

  handleError(error: any) {
    if (error.response) {
      // Server responded with error status
      return {
        message: error.response.data.message || 'Server error occurred',
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response
      return {
        message: 'Network error - please check your connection',
        status: 0,
      };
    } else {
      // Something else happened
      return {
        message: error.message || 'An unexpected error occurred',
        status: 0,
      };
    }
  }
}

export default BaseAPIService;