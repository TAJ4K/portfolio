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
      <InternalLink
        path="contact"
        idName="Contact"
        letter="Co"
        v-bind:mounted="mounted"
      />
      <InternalLink
        path="qualifications"
        idName="Qualifications"
        letter="Qu"
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
      let angle = 360 - 90;
      let dangle = 360 / circles.length;

      for (let i = 0; i < circles.length; ++i) {
        let circle = circles[i];
        angle += dangle;
        circle.style.transform = `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`;
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
      )
        return true;

      return false;
    },
  },
});
</script>

<style scoped>
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
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  height: 500px;
  color: var(--primary);
  text-shadow: black 0.1em 0.1em 0.1em;
}
</style>
