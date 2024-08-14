<script lang="ts" setup>
const navigation = [
  {
    label: 'about me',
    name: 'index'
  },
  {
    label: 'projects',
    name: 'projects'
  },
  {
    label: 'posts',
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
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 7px;
}

nav a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  opacity: 0.6;
  padding-bottom: 10px;
  transition: 200ms ease;
}

nav a:hover {
  opacity: 1;
}

nav a:not(:last-child) {
  margin-right: 24px;
}

nav a.active {
  border-color: var(--border-active-color);
  opacity: 1;
}
</style>
