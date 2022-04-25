<template>
  <div class="home">
    <nav :class="{ CircleNav: !isMobile() }">
      <div class="title">
        <div>Kobe Rankich</div>
        <div>Software Developer</div>
      </div>
      <ExternalLink
        url="https://www.linkedin.com/in/jolt"
        idName="LinkedIn"
        imgurl="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
        v-bind:mounted="mounted"
      />
      <ExternalLink
        url="https://github.com/TAJ4K"
        idName="GitHub"
        imgname="githublogo.png"
        v-bind:mounted="mounted"
      />
      <InternalLink
        path="projects"
        idName="Projects"
        letter="Pr"
        v-bind:mounted="mounted"
      />
      <InternalLink
        path="skills"
        idName="Skills"
        letter="Sk"
        v-bind:mounted="mounted"
      />
      <InternalLink
        path="experience"
        idName="Experience"
        letter="Ex"
        v-bind:mounted="mounted"
      />
      <InternalLink
        path="education"
        idName="Education"
        letter="Ed"
        v-bind:mounted="mounted"
      />
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExternalLink from "@/components/ExternalLink.vue";
import InternalLink from "@/components/InternalLink.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ExternalLink,
    InternalLink,
  },
  data() {
    return {
      mounted: false,
    };
  },
  mounted: function () {
    document.querySelectorAll(".CircleNav").forEach((CircleNav) => {
      let circles = CircleNav.querySelectorAll(
        ".CircleNav > a"
      ) as NodeListOf<HTMLElement>;
      let angle = 360 - 90,
        dangle = 360 / circles.length;
      for (let i = 0; i < circles.length; ++i) {
        let circle = circles[i];
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(${
          CircleNav.clientWidth / 2
        }px) rotate(-${angle}deg)`;
      }
      this.mounted = true;
    });
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.CircleNav {
  position: relative;
  width: 500px;
  height: 500px;
}

.CircleNav > a {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: calc(-100px / 2);
  border-radius: 50%;
}

.CircleNav > a > div:hover {
  box-shadow: 0 0 10px 5px rgba(76, 136, 74, 0.3);
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

a,
a:link,
a::after {
  text-decoration: none;
}

#GitHub > .dot {
  background-color: #e74c3c;
}

#LinkedIn > .dot {
  background-color: #3498db;
}

#Projects > .dot {
  background-color: #d8c8ba;
}

#Skills > .dot {
  background-color: #c40ff1;
}

#Experience > .dot {
  background-color: #f1c40f;
}

#Education > .dot {
  background-color: #2ecc71;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  height: 500px;
  color: var(--primary);
}
</style>
