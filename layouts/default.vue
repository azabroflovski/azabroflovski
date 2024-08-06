<template>
  <div class="l-default">
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
</style>

