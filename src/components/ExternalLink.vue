<template>
  <a :href="url" :id="idName">
    <div class="dot" :class="{ 'transition: all 0.2s ease-in-out;': mounted }">
      <span class="tooltiptext">{{ idName }}</span>
      <img :src="imgurl" :alt="idName" class="logo" v-if="imgurl" />
      <img
        :src="require(`@/assets/${imgname}`)"
        :alt="idName"
        class="logo"
        v-else
      />
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExternalLink",
  props: {
    url: String,
    idName: String,
    imgurl: String,
    imgname: String,
    mounted: Boolean,
  },
});
</script>
