<template>
  <div>
    <div class="main">
      <the-navigation></the-navigation>
    </div>
    <div class="main">
      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
    <footer>
      <the-footer></the-footer>
    </footer>
  </div>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import TheFooter from "./components/nav/TheFooter.vue";
export default {
  components: {
    TheNavigation,
    TheFooter,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace("/home");
      }
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app {
  margin: 0;
  padding: 0;
}
.main {
  margin-left: 12%;
  margin-right: 12%;
  min-height: 100%;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
/* footer {
   clear: both;
  position: fixed;
  bottom: 0;
   margin-top: -200px;
  width: 100%;
} */
</style>
