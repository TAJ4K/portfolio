<template>
  <a :href="url" :id="idName" draggable="false">
    <div class="dot" :class="{ 'transition: all 0.2s ease-in-out;': mounted }">
      <span class="tooltiptext">{{ idName }}</span>
      <img
        :src="imgurl"
        :alt="idName"
        class="logo"
        draggable="false"
        v-if="imgurl"
      />
      <img
        :src="require(`@/assets/${imgname}`)"
        :alt="idName"
        class="logo"
        draggable="false"
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

<style scoped>
a {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: calc(-100px / 2);
  border-radius: 50%;
}

a > div:hover {
  box-shadow: 0 0 10px 1px var(--primary);
  transform: scale(1.1);
}

.dot {
  position: relative;
  left: 25%;
  top: 25%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.dot > *:not(.tooltiptext) {
  line-height: 50px;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
  color: black;
}

.dot > div {
  text-shadow: black 0 0 0.4em;
}

.tooltiptext {
  visibility: hidden;
  background-color: rgb(14, 12, 12);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  width: min-content;
  bottom: 100%;
  left: 50%;
  margin: auto;
  margin-bottom: 5px;
  padding: 5px;
  transform: translateX(-50%);
}

.tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin: auto;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgb(14, 12, 12) transparent transparent transparent;
}

.dot:hover .tooltiptext {
  visibility: visible;
}

#GitHub > .dot {
  background-color: #e74c3c;
}

#LinkedIn > .dot {
  background-color: #3498db;
}
</style>
