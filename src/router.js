import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import AddRecipe from "./pages/recipes/AddRecipe.vue";
import RecipesList from "./pages/recipes/RecipesList.vue";
import store from "./store";
// import RecipesDetails from "./components/recipes/RecipesDetails.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
// import TheContact from "./pages/contact/TheContact";

const RequestReceived = defineAsyncComponent(() =>
  import("./pages/contact/RequestReceived")
);
const UserAuth = defineAsyncComponent(() =>
  import("./pages/auth/UserAuth.vue")
);
const AboutList = defineAsyncComponent(() =>
  import("./pages/about/AboutList.vue")
);
const TheTags = defineAsyncComponent(() => import("./pages/tags/TheTags.vue"));
const TheContact = defineAsyncComponent(() =>
  import("./pages/contact/TheContact")
);
const BeefRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/BeefRecipe.vue")
);
const DinnerRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/DinnerRecipe.vue")
);
const ChickenmeatRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/ChickenmeatRecipe.vue")
);
const PizzaRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/PizzaRecipe.vue")
);
const VegetableRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/VegetableRecipe.vue")
);
const PiggmeatRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/PiggmeatRecipe.vue")
);
const BreakfastRecipe = defineAsyncComponent(() =>
  import("./pages/recipes/BreakfastRecipe.vue")
);

const RecipesDetails = defineAsyncComponent(() =>
  import("./components/recipes/RecipesDetails.vue")
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: TheHome,
    },
    {
      path: "/home/:id",
      component: RecipesDetails,
      props: true,
    },
    {
      path: "/breakfast",
      component: BreakfastRecipe,
    },
    {
      path: "/dinner",
      component: DinnerRecipe,
    },
    {
      path: "/pizza",
      component: PizzaRecipe,
    },
    {
      path: "/chicken",
      component: ChickenmeatRecipe,
    },
    {
      path: "/piggmeat",
      component: PiggmeatRecipe,
    },
    {
      path: "/vegetable",
      component: VegetableRecipe,
    },
    {
      path: "/beef",
      component: BeefRecipe,
    },
    {
      path: "/about",
      component: AboutList,
    },
    {
      path: "/recipes",
      component: RecipesList,
      name: "recipes",
    },
    {
      path: "/recipes/:id",
      component: RecipesDetails,
      props: true,
    },
    {
      path: "/tags",
      component: TheTags,
    },
    {
      path: "/login",
      component: UserAuth,
      meta: { requiresUnauth: true },
    },
    {
      path: "/addRecipe",
      component: AddRecipe,
      meta: { requiresAuth: true },
    },
    {
      path: "/contact",
      component: TheContact,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: RequestReceived,
      meta: { requiresAuth: true },
    },
    {
      path: "/:notFound(.*)",
      redirect: "/",
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/home");
  } else {
    next();
  }
});

export default router;
