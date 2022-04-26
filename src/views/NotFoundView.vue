<template>
  <div class="NotFound">
    <div>404: Page not found</div>
    <img
      src="https://i.ytimg.com/vi/R7K-crxH2J0/hqdefault.jpg"
      alt="sad puppy"
    />
    <a href="/">Go back to home</a>
  </div>
</template>

<style>
.NotFound {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.NotFound > * {
  display: flex;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  color: var(--primary);
  margin: 1em;
}

.NotFound > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  min-width: 200px;
  width: 25%;
  height: auto;
}

.NotFound > a {
  border: 1px solid var(--primary);
  border-radius: 5px;
  width: 65%;
  max-width: 10em;
  height: 25%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.8em;
}
</style>
