<template>
  <div class="projects">
    <VueWriter
      :array="['My Projects']"
      :iterations="1"
      :typeSpeed="150"
      class="Header"
    />
    <div class="flexParent">
      <div class="flexItem">
        <div class="itemTitle">Sables</div>
        <div class="itemSubtitle">A tool for the visually impaired</div>
        <div class="content">
          Uses Go and hardware bindings to add Text To Speech for images to help
          visually impaired navigate the web easier.
        </div>
        <a href="https://sables.tech" target="_blank" class="projectLink">
          View Website🔗
        </a>
      </div>
      <div class="flexItem">
        <div class="itemTitle">goRandomUA</div>
        <div class="itemSubtitle">Golang useragent randomizer</div>
        <div class="content">
          Short Go script that generates a random useragent from predefined
          ones.
        </div>
        <a
          href="https://github.com/TAJ4K/goRandomUA"
          target="_blank"
          class="projectLink"
        >
          View on Github🔗
        </a>
      </div>
      <div class="flexItem">
        <div class="itemTitle">pkg-file-resolver</div>
        <div class="itemSubtitle">NPM package for vercel/pkg</div>
        <div class="content">
          NodeJS Script that remedies the issue with local filepaths presented
          with vercel/pkg's bundling system.
        </div>
        <a
          href="https://www.npmjs.com/package/pkg-file-resolver"
          target="_blank"
          class="projectLink"
        >
          View on NPM🔗
        </a>
      </div>
      <div class="flexItem">
        <div class="itemTitle">gofps</div>
        <div class="itemSubtitle">Go wrapper for FastPeopleSearch</div>
        <div class="content">
          Created a wrapper for FastPeopleSearch because all other search APIs
          cost insane amounts of money.
        </div>
        <a
          href="https://www.github.com/TAJ4K/gofps"
          target="_blank"
          class="projectLink"
        >
          View on GitHub🔗
        </a>
      </div>
      <div class="flexItem">
        <div class="itemTitle">Bentley Registerer</div>
        <div class="itemSubtitle">Automatic registery for Bentley classes</div>
        <div class="content">
          Automated the process of registering for Bentley University classes so
          I always get my desired schedule.
        </div>
        <a
          href="https://www.github.com/TAJ4K/gofps"
          target="_blank"
          class="projectLink"
        >
          View on GitHub🔗
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsView",
});
</script>

<style scoped>
.Header {
  margin-top: 5%;
}

.flexParent {
  display: flex;
  justify-content: center;
  gap: 6em;
  margin-top: 5em;
  flex-direction: row;
  flex-wrap: wrap;
}

.flexItem {
  position: relative;
  color: rgb(152, 152, 152);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 18em;
  height: 12em;
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  background-color: rgb(49, 49, 49);
  padding: 0.5em;
  flex: 0 0 20%;
}

.itemTitle {
  font-size: 1.3em;
  color: var(--tertiary);
}
.itemSubtitle {
  font-size: 1.1em;
  margin-bottom: 0.4em;
}

.flexItem > div {
  text-align: center;
}

.projectLink {
  color: var(--secondary);
  position: absolute;
  bottom: 0.5em;
}
</style>
