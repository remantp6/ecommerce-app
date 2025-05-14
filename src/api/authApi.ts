import { ApiSuccessResponse } from "../types/auth";
import axiosInstance from "./axiosInstance";
import { AxiosError, AxiosResponse } from "axios";


// define types for the signup form fields
interface SignupPayload {
  email: string;
  password: string;
  confirm_password: string;
}

// function to handle signup
export const signup = async (payload: SignupPayload): Promise<ApiSuccessResponse> => {
  try {
    const response: AxiosResponse<ApiSuccessResponse> =
      await axiosInstance.post("/email-signup/", payload);

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      throw err;
    } else if (err.request) {
      throw new Error("No response from server. Please check your connection.");
    } else if (err.code === "ECONNABORTED") {
      throw new Error("Request timed out. Please try again.");
    } else {
      throw new Error("Unexpected error during signup.");
    }
  }
};
