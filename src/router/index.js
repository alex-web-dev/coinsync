import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import OverviewView from "@/views/OverviewView.vue";
import ConnectView from "@/views/ConnectView.vue";

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
