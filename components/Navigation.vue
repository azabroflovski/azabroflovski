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
          'text-blue-500! border-b-blue!': nav.name === $route.name
        }"
        class="mr-lg text-gray border-b-2 font-500 border-b-solid border-b-transparent pb-1 text-lg"
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


