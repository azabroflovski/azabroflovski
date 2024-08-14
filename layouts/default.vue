<template>
  <div class="l-default">
    <Author />
    <Navigation />

    <div class="l-content">
      <slot />
    </div>
  </div>
</template>

<style>
.l-default {
  max-width: 70ch;
  margin-inline: auto;
  padding: 2vh;
}

.l-content {
  margin-top: 34px;
}

.l-gradient {
  height: 40px;
  width: 80%;
  position: fixed;
  left: 20%;
  top: 200px;
  z-index: 10;

  filter: blur(350px);
}
</style>
