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
  <nav class="flex items-center relative">
    <NuxtLink
        v-for="nav in navigation"
        :key="nav.name"
        :to="nav"
        class="mr-7 text-gray text-base font-bold pb-1.6 border-b-2 border-b-solid border-b-transparent relative z-10"
        :class="{
          'border-b-dark! @dark:border-b-light! @dark:text-white! text-dark!': nav.name === $route.name
        }"
        style="transition: 200ms ease"
    >
      {{ nav.label }}
    </NuxtLink>
    <div class="absolute border-b-1 border-b-gray-200 @dark:border-b-dark border-b-solid bottom-0 w-100% z-1"></div>
  </nav>
</template>

<style>
nav a {
  text-decoration: none !important;
  cursor: default;
}
</style>


