import axios from "axios";
import { useAuth } from "@/stores/auth";
import { useMessages } from "@/stores/messages";

axios.defaults.baseURL = "http://45.147.176.14/";
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const storeAuth = useAuth();
    const storeMessages = useMessages();

    if (error.response.status === 500) {
      storeMessages.add({
        text: "There was an error. Please try again later.",
      });
    } else if (error.response.status === 403) {
      storeMessages.add({
        text: "Please log in to your account",
      });
      storeAuth.logout();
    }

    return Promise.reject(error);
  }
);
