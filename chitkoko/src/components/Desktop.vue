<template>
  <div class="desktop">
    <div
      v-for="icon in icons"
      :key="icon.id"
      class="desktop-icon"
      @click="$emit('open', icon)"
    >
      <img :src="icon.src" :alt="icon.name" />
      <p>{{ icon.name }}</p>
    </div>
  </div>
</template>

<script>
import folderIcon from "@/assets/folder.png";
import docIcon from "@/assets/doc.png";
import browserIcon from "@/assets/browser.png";
import photoIcon from "@/assets/photo.png";
import educationIcon from "@/assets/education.png";

export default {
  name: "Desktop",
  data() {
    return {
      icons: [
        { id: 1, name: "Projects", src: folderIcon, route: "Projects" },
        { id: 2, name: "Resume", src: docIcon, route: "Resume" },
        { id: 3, name: "About", src: browserIcon, route: "About" },
        { id: 4, name: "Gallery", src: photoIcon, route: "Gallery" },
        { id:5, name: "Education", src: educationIcon, route: "Education"}
      ]
    };
  }
};
</script>

<style scoped>
.desktop {
  display: flex;            /* use flex instead of grid */
  flex-direction: column;   /* stack icons vertically */
  align-items: flex-start;  /* align icons to the left */
  gap: 20px;                /* space between icons */
  padding: 40px;
  color: white;
}
.desktop-icon {
  width: 80px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: transform 0.15s ease, filter 0.2s ease;
}
.desktop-icon img {
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
.desktop-icon:hover img {
  transform: scale(1.1);
  filter: brightness(1.2);
}
.desktop-icon p {
  font-size: 13px;
  margin-top: 6px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
}
</style>
