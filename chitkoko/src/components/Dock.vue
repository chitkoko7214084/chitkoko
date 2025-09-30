<template>
  <div class="dock">
    <div
      v-for="app in apps"
      :key="app.id"
      class="dock-icon"
      :class="{ bounce: bouncingApp === app.id }"
      @click="bounce(app.id); $emit('open', app)"
    >
      <img :src="app.src" :alt="app.name" />
    </div>
  </div>
</template>

<script>
import codeIcon from "@/assets/code.png";
import mailIcon from "@/assets/mail.png";
import browserIcon from "@/assets/browser.png";
import photoIcon from "@/assets/photo.png";

export default {
  name: "Dock",
  data() {
    return {
      apps: [
        { id: 1, name: "Projects", src: codeIcon, route: "Projects" },
        { id: 2, name: "Resume", src: mailIcon, route: "Resume" },
        { id: 3, name: "About", src: browserIcon, route: "About" },
        { id: 4, name: "Gallery", src: photoIcon, route: "Gallery" }
      ],
      bouncingApp: null
    };
  },
  methods: {
    bounce(id) {
      this.bouncingApp = id;
      setTimeout(() => (this.bouncingApp = null), 600);
    }
  }
};
</script>

<style scoped>
.dock {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px) saturate(180%);
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}
.dock-icon {
  width: 64px;
  height: 64px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}
.dock-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}
.dock-icon:hover {
  transform: scale(1.25);
}
@keyframes bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-20px); }
  50%  { transform: translateY(0); }
  70%  { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}
.dock-icon.bounce {
  animation: bounce 0.6s ease;
}
</style>
