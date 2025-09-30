import { createRouter, createWebHistory } from "vue-router";
import Projects from "@/views/Projects.vue";
import Resume from "@/views/Resume.vue";
import Gallery from "@/views/Gallery.vue";
import About from "@/views/About.vue";
import Education from "@/views/Education.vue";

const routes = [
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/resume", name: "Resume", component: Resume },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/about", name: "About", component: About },
  { path: "/education", name: "Education", component: Education },]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
