import axios from "axios";
import { toast } from "sonner";

const DEFAULT_ERROR_TEXT = "An error occurred. Try again later";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";

axios.interceptors.request.use((request) => {
  return request;
});

const errorHandler = (error: any) => {
  const responseMessage = error.response.data.message;
  const errorMessage = responseMessage.substring(3, responseMessage.length - 4);
  const message: string =
    errorMessage.length > 0 ? errorMessage : DEFAULT_ERROR_TEXT;
  toast.error(message);
  return Promise.reject(message);
};

const responseHandler = (response: any) => {
  return response;
};

axios.interceptors.response.use(responseHandler, errorHandler);
