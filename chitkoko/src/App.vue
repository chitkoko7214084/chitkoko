<template>
  <div class="app">
    <Desktop @open="openWindow" />
    <Dock @open="openWindow" />

    <!-- Window for active route -->
    <Window
      v-if="showWindow"
      :title="activeTitle"
      @close="showWindow = false"
    >
      <router-view />
    </Window>
  </div>
</template>

<script>
import Desktop from "@/components/Desktop.vue";
import Dock from "@/components/Dock.vue";
import Window from "@/components/Window.vue";

export default {
  name: "App",
  components: { Desktop, Dock, Window },
  data() {
    return {
      showWindow: false,
      activeTitle: ""
    };
  },
  methods: {
    openWindow(app) {
      this.showWindow = true;
      this.activeTitle = app.name;
      this.$router.push({ name: app.route });
    }
  }
};
</script>

<style>
.app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("/wallpaper.jpg") no-repeat center center / cover;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
</style>
