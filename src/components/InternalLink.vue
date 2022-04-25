<template>
  <router-link :to="path" :id="idName">
    <div class="dot" :class="{ 'transition: all 0.2s ease-in-out;': mounted }">
      <span class="tooltiptext">{{ idName }}</span>
      <div>{{ letter }}</div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InternalLink",
  props: {
    path: String,
    idName: String,
    letter: String,
    mounted: Boolean,
  },
});
</script>
