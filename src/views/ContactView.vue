<template>
  <div class="contact">
    <VueWriter
      :array="['Want to contact me?', 'Contact Info:']"
      :iterations="1"
      :typeSpeed="150"
      class="Header"
    />
    <div class="methods">
      <div class="item" @click="call()">
        <div>Phone</div>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/phone.png"
        />
      </div>
      <div class="item" @click="email('kobet12345@gmail.com')">
        <div>Email (Personal)</div>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/new-post.png"
        />
      </div>
      <div class="item" @click="email('kobe@joltindustries.fish')">
        <div>Email (Work)</div>
        <img
          src="https://img.icons8.com/material-outlined/24/000000/new-post.png"
        />
      </div>
      <div class="item" @click="goto(`https://www.linkedin.com/in/jolt`)">
        <div>LinkedIn</div>
        <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactView",
  methods: {
    call() {
      window.open("tel:+14255011802", "_self");
    },
    email(email: string) {
      window.open(`mailto:${email}`, "_self");
    },
    goto(link: string) {
      window.open(link, "_blank");
    },
  },
});
</script>

<style>
@keyframes blink {
  49% {
    background-color: rgb(0, 0, 0);
  }
  50% {
    background-color: transparent;
  }
  100% {
    background-color: transparent;
  }
}

.Header {
  display: flex;
  justify-content: center;
  margin-top: 10%;
  color: var(--primary);
  font-size: 3em;
}

.is-typed span.cursor {
  display: inline-block;
  width: 0.25em;
  background-color: rgb(0, 0, 0);
  animation: blink 1s linear 0s 15 normal forwards;
}

.methods {
  margin-top: 5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3em;
}

.item {
  color: rgb(152, 152, 152);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 9em;
  height: 10em;
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  background-color: rgb(49, 49, 49);
  cursor: pointer;
}

.item > div {
  margin-top: 0.5em;
}

.item > img {
  width: 4em;
  height: 4em;
  margin-top: 2em;
}
</style>
