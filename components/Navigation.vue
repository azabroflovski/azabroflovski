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
    <NuxtLink
      v-for="nav in navigation"
      :key="nav.name"
      :to="nav"
      :class="{
        active: nav.name === $route.name
      }"
    >
      {{ nav.label }}
    </NuxtLink>
  </nav>
</template>

<style>
nav {
  border-bottom: 1px solid #222;
  padding-bottom: 8px;
}
nav a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  opacity: 0.6;
  padding-bottom: 8px;
  transition: 200ms ease;
}

nav a:hover {
  opacity: 1;
}

nav a:not(:last-child) {
  margin-right: 24px;
}

nav a.active {
  border-color: #000;
  opacity: 1;
  border-color: #fefefe;
}
</style>
