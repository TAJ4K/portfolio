<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scrollbar from "smooth-scrollbar";

export default defineComponent({
  mounted() {
    const app = document.getElementById("app");
    if (!app) return;
    Scrollbar.init(app);
  },
});
</script>
