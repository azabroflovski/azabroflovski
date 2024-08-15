<script lang="ts" setup>
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <KeepAlive>
      <NuxtPage />
    </KeepAlive>
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root {
  color-scheme: light dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
}

@media (prefers-color-scheme: dark) {
  :root {
    --un-prose-body: #a5a5a5;
    --un-prose-headings: #fff;
    --un-prose-links: #fff;
  }
}

.page-enter-active,
.page-leave-active {
  transition: 300ms ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
