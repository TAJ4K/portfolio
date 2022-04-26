<template>
  <div class="education">
    <VueWriter
      :array="['Education']"
      :iterations="1"
      :typeSpeed="150"
      class="Header"
    />
    <div class="school">
      <div class="title">Bentley University</div>
      <div class="location">Waltham, MA</div>
      <div class="subtitle">Business Economics Major</div>
      <div class="subtitle">Computer Science Minor</div>
      <div class="subtitle">3.2 GPA</div>
      <div class="years">2021-2025</div>
    </div>
    <div class="school">
      <div class="title">Woodinville High School</div>
      <div class="location">Woodinville, WA</div>
      <div class="subtitle">3.4 GPA</div>
      <div class="years">2017-2021</div>
    </div>
  </div>
</template>

<style scoped>
.Header {
  margin-top: 5%;
  margin-bottom: 2%;
}

.school {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
}

.title {
  word-wrap: break-word;
}

.location {
  font-size: 1.1em;
  color: rgb(152, 152, 152);
}

.title {
  font-size: 2.2em;
  font-weight: bold;
  color: var(--tertiary);
}
.title::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: var(--tertiary);
  margin-bottom: 0.2em;
}
.subtitle {
  font-size: 1.3em;
  color: var(--primary);
}
.years {
  font-size: 1.1em;
  color: var(--secondary);
}
</style>
