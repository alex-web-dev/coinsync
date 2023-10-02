import axios from "axios";
import { defineStore } from "pinia";
import { useAuth } from "@/stores/auth";
import { useMessages } from "@/stores/messages";
import { useRouter } from "vue-router";

export const useProfile = defineStore("profile", () => {
  const storeAuth = useAuth();
  const storeMessages = useMessages();
  const router = useRouter();

  async function getAllocation() {
    const token = storeAuth.getToken();
    let data;

    try {
      data = await axios.get("/api/personal/allocation", {
        headers: {
          "Content-Type": "application/json",
          "API-TOKEN": token,
        },
      });

      return data?.data;
    } catch (error) {
      if (error.response.status === 403) {
        storeMessages.add({
          text: "Please log in to your account",
        });

        router.push({ name: "login" });
      }
    }
  }

  async function createExchangeCredential(data) {
    const token = storeAuth.getToken();
    await axios.post("/api/personal/exchange/credentials", {
      "exchange": data.exchange,
      "api_key": data.api_key,
      "secret_key": data.secret_key,
    }, {
      headers: {
        "Content-Type": "application/json",
        "API-TOKEN": token,
      },
    });
  }

  return { getAllocation, createExchangeCredential };
});
