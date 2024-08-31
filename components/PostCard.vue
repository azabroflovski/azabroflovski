<script lang="ts" setup>
defineProps<{
  post: any
}>()
</script>

<template>
  <NuxtLink class="project text-dark @dark:text-light" :to="post._path">
    <div class="font-bold text-xl mb-2">
      {{ post.title }}
    </div>


    <div class="text-gray-800 @dark:text-gray sm:text-base text-sm">
      {{ post.description }}
    </div>

    <div class="text-black @dark:text-gray-600 font-bold mt-2 project__tags">
      <span v-for="tag in post.tags" :key="tag" class="text-xs">
        {{ tag }}<b>&nbsp; · &nbsp;</b>
      </span>
    </div>
  </NuxtLink>
</template>