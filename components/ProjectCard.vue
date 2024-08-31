<script lang="ts" setup>
defineProps<{
  project: any
}>()
</script>

<template>
  <a class="project text-dark @dark:text-light" :href="project.url" target="_blank">
    <div class="flex items-center mb-2">
      <div v-html="project.icon" class="mr-4 text-dark @dark:text-light">

      </div>

      <div>
        <div class="font-500">
          {{ project.title }}
        </div>

        <div class="text-xs text-gray mb-1">
          {{ project.url }}
        </div>
      </div>
    </div>

     <div class="text-gray-800 @dark:text-gray sm:text-base text-sm">
       {{ project.description }}
     </div>

     <div class="text-black @dark:text-gray-600 font-bold mt-2 project__tags">
      <span v-for="item in project.technologies" :key="item" class="text-xs">
        {{ item }}<b>&nbsp; · &nbsp;</b>
      </span>
     </div>
  </a>
</template>

<style>
.project {
  display: block;
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 16px;
  transition: 250ms ease;
  text-decoration: none;
}

.project__tags span:last-child b {
  display: none;
}

.project svg {
  width: 38px;
  height: 38px;
}

.project:hover {
  background-color: rgba(0, 0, 0, 0.015);
}

@media (prefers-color-scheme: dark) {
  .project {
    border: 1px solid #222;
  }

  .project:hover {
    background-color: rgba(255, 255, 255, 0.01);
  }
}



</style>