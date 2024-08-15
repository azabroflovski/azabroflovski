<script lang="ts" setup>
defineProps<{
  project: any
}>()
</script>

<template>
  <a class="project text-white" :href="project.url" target="_blank">
    <div class="mb-1">
      {{ project.title }}
    </div>

    <div class="text-truegray text-sm">
      {{ project.description }}
    </div>
  </a>
</template>

<style>
.project {
  display: block;
  border: 1px solid #222;
  padding: 16px;
  border-radius: 8px;
  transition: 250ms ease;
  text-decoration: none;
}

.project:hover {
  background-color: rgba(255, 255, 255, 0.01);
}
</style>