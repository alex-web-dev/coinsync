import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import OverviewView from "@/views/OverviewView.vue";
import ConnectView from "@/views/ConnectView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";
import LogoutView from "@/views/LogoutView.vue";
import { useAuth } from "@/stores/auth";

const DEFAULT_TITLE = "Coinsync";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/overview",
      name: "overview",
      component: OverviewView,
      meta: {
        title: `${DEFAULT_TITLE} - Assets Overview`,
        auth: true,
      },
    },
    {
      path: "/connect",
      name: "connect",
      component: ConnectView,
      meta: {
        title: `${DEFAULT_TITLE} - Connect`,
        auth: true,
      },
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
      meta: {
        title: `${DEFAULT_TITLE} - Registration`,
        auth: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: `${DEFAULT_TITLE} - Login`,
        auth: false,
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
      meta: {
        title: `${DEFAULT_TITLE} - logout`,
      },
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 90,
      };
    } else {
      window.scrollTo(0, 0);

      return {
        x: 0,
        y: 0,
      };
    }
  },
});

router.beforeEach((to, _, next) => {
  const requireAuth = to.meta.auth;
  const storeAuth = useAuth();

  if (requireAuth && storeAuth.isAuth) {
    next();
  } else if (requireAuth && !storeAuth.isAuth) {
    next({ name: "login" });
  } else if (requireAuth === false && storeAuth.isAuth) {
    next({ name: "home" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  let title = to.meta.title || DEFAULT_TITLE;

  document.title = title;
});

export default router;
