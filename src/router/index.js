import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import OverviewView from "@/views/OverviewView.vue";
import ConnectView from "@/views/ConnectView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import LoginView from "@/views/LoginView.vue";

const DEFAULT_TITLE = 'Coinsync';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/overview",
      name: "overview",
      component: OverviewView,
      meta: {
        title: `${DEFAULT_TITLE} - Assets Overview`,
      }
    },
    {
      path: "/connect",
      name: "connect",
      component: ConnectView,
      meta: {
        title: `${DEFAULT_TITLE} - Connect`,
      }
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationView,
      meta: {
        title: `${DEFAULT_TITLE} - Registration`,
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        title: `${DEFAULT_TITLE} - Login`,
      }
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

router.afterEach((to) => {
  let title = to.meta.title || DEFAULT_TITLE;

  document.title = title;
});

export default router;
