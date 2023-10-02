import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useMessages } from "@/stores/messages";
import axios from "axios";
import { useCookie } from "@/hooks/cookie";

export const useAuth = defineStore("auth", () => {
  const { getCookie, setCookie, removeCookie } = useCookie();
  const router = useRouter();
  const storeMessages = useMessages();
  const authError = ref("");
  const token = ref(getToken());

  const error = computed(() => {
    return authError.value;
  });

  const isAuth = computed(() => {
    return !!token.value;
  });

  function setToken(value, time = 3600) {
    token.value = value;
    setCookie("token", value, { "max-age": time });
  }

  function getToken() {
    return getCookie("token");
  }

  async function login(data) {
    authError.value = "";
    try {
      const result = await axios.post(
        "/api/sign_in",
        {
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const tokenTimeMS = new Date(result?.data?.expire_time) - new Date();
      const tokenTimeSec = Math.floor(tokenTimeMS / 1000);
      setToken(result.data.token, tokenTimeSec);

      router.push({ name: "home" });
    } catch (error) {
      if (error.response.status === 422) {
        authError.value = error.response.data.message;
      } else {
        storeMessages.add({
          text: "Something went wrong",
        });
      }
    }
  }

  async function register(data) {
    authError.value = "";
    let hasError = false;
    try {
      await axios.post(
        "/api/registration",
        {
          email: data.email,
          username: data.username,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      router.push({ name: "login" });
    } catch (error) {
      hasError = true;
      if (error.response.status === 422) {
        authError.value = error.response.data.message;
      } else {
        storeMessages.add({
          text: "Something went wrong",
        });
      }
    }

    return hasError;
  }

  async function logout() {
    token.value = null;
    removeCookie("token");
    router.push("/login");
  }

  function clearError() {
    authError.value = "";
  }

  return { isAuth, getToken, setToken, login, register, logout, error, clearError };
});
