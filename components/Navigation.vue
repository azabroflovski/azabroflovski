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
          'text-white! border-blue-500! bg-blue-500': nav.name === $route.name
        }"
        class="mr-lg text-gray border-2 font-bold border-solid border-gray-200 @dark:border-dark-5 text-base rounded-2xl px-4 py-1"
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


