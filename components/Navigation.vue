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
  },
]
</script>

<template>
  <nav class="flex items-center">
    <NuxtLink
        v-for="nav in navigation"
        :key="nav.name"
        :to="nav"
        :class="{
          'text-blue! border-b-blue!': nav.name === $route.name
        }"
        class="mr-lg text-white border-b-1 border-b-solid border-b-transparent pb-1"
    >
      {{ nav.label }}
    </NuxtLink>
  </nav>
</template>

<style>
nav a {
  text-decoration: none !important;
}
</style>


