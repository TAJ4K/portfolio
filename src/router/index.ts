import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectsView.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("../views/SkillsView.vue"),
  },
  {
    path: "/experience",
    name: "experience",
    component: () => import("../views/ExperienceView.vue"),
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/EducationView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/qualifications",
    name: "qualifications",
    component: () => import("../views/QualificationsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
