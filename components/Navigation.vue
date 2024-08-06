<script lang="ts" setup>
const navigation = [
  {
    label: 'About me',
    name: 'index'
  },
  {
    label: 'Projects',
    name: 'projects'
  },
  {
    label: 'Posts',
    name: 'posts',
  }
]
</script>

<template>
  <nav>
    <NuxtLink v-for="nav in navigation" :key="nav.name" :to="nav" :class="{
      active: nav.name === $route.name
    }">
      {{ nav.label }}
    </NuxtLink>
  </nav>
</template>

<style>
nav {
  display: flex;
  border-bottom: 1px solid var(--border-color);
}

nav a {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  opacity: 0.6;
  padding-bottom: 8px;
  transition: 200ms ease;
  font-weight: bold;
}

nav a:hover {
  opacity: 1;
}

nav a:not(:last-child) {
  margin-right: 24px;
}

nav a.active {
  border-color: var(--border-color-active);
  opacity: 1;
}
</style>
