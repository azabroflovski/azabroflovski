<template>
  <NuxtLayout>
    <KeepAlive>
      <NuxtPage />
    </KeepAlive>
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root {
  --text-color: #111;
  --font-family: 'Inter';
  --bg-color: #fefefe;
  --code-background: rgba(0, 0, 0, 0.06);
  --code-hover-background: rgba(0, 0, 0, 0.12);
  --link-color: #111;
  --border-color: #eee;
  --border-color-active: #333;
}

:root {
  font-family: var(--font-family), sans-serif;
  line-height: 1.58;
  font-weight: 400;
  font-size: 16px;
  color-scheme: light dark;
  color: var(--text-color);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--bg-color);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
  margin-bottom: 12px;
}

main section {
  margin-bottom: 26px;
  padding-bottom: 18px;
}

.content p {
  margin-bottom: 12px;
}

main section:not(:last-child) {
  border-bottom: 1px solid #eee;
}

code {
  padding: 2px 6px;
  background-color: var(--code-background);
  border-radius: 6px;
  transition: 200ms ease;
}

code:hover {
  cursor: pointer;
  background-color: var(--code-hover-background);
}

a {
  color: var(--link-color);
  outline: none;
  border-bottom: none;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: rgba(255, 255, 255, 0.77);
    --link-color: #fff;
    --code-background: rgba(255, 255, 255, 0.1);
    --code-hover-background: rgba(255, 255, 255, 0.18);
    --bg-color: #000;
    --border-color: #222;
    --border-color-active: #fff;
  }

  main section:not(:last-child) {
    border-bottom-color: rgba(255, 255, 255, 0.07);
  }
}
</style>
