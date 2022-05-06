<template>
  <div class="qualifications">
    <VueWriter
      :array="['Qualifications']"
      :iterations="1"
      :typeSpeed="150"
      class="Header"
    />
    <div class="flexParent">
      <div class="flexItem">
        <div class="itemTitle">Google IT Support</div>
        <div class="itemSubtitle">Google</div>
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/QLNHNK4M9SSX"
          class="itemLink"
          >Link🔗</a
        >
      </div>
      <div class="flexItem">
        <div class="itemTitle">Programming With Google Go</div>
        <div class="itemSubtitle">UC Irvine</div>
        <a
          href="https://www.coursera.org/account/accomplishments/specialization/certificate/CL6PLTXKVF9H"
          class="itemLink"
          >Link🔗</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.Header {
  margin-top: 5%;
  margin-bottom: 2%;
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
  min-width: 15em;
  min-height: 12em;
  border: 1px solid rgb(152, 152, 152);
  border-radius: 5px;
  background-color: rgb(49, 49, 49);
  padding: 0.5em;
  flex: 0 0 20%;
}

.itemTitle {
  font-size: 1.3em;
  color: var(--tertiary);
  margin-bottom: 1em;
}
.itemSubtitle {
  font-size: 1.1em;
  margin-bottom: 0.4em;
}

.flexItem > div {
  text-align: center;
}

.itemLink {
  color: var(--secondary);
  position: absolute;
  bottom: 1.2em;
  padding: 3px 6px 3px 7px;
  border: 1px solid var(--secondary);
  border-radius: 5px;
}
</style>
