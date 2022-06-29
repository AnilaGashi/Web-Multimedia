import { createStore } from "vuex";
import contactModule from "./contact/index.js";
import authModule from "./auth/index";
import recipesModule from "./recipes/index";

const store = createStore({
  modules: {
    contact: contactModule,
    auth: authModule,
    recipes: recipesModule,
  },
});

export default store;
