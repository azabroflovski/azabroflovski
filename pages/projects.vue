<script lang="ts" setup>
const projects = [
  {
    title: 'Tiny Dialogue',
    description: 'Native, no overhead scripts, just dialog. Tiny wrapper over the <dialog>',
    url: 'https://github.com/azabroflovski/tiny-dialogue',
  },
  {
    title: 'mxik',
    description: 'Simple package for API calls tasnif.soliq.uz (written in TypeScript ⚡) ️',
    url: 'https://github.com/azabroflovski/mxik-js',
  },
  {
    title: 'thumbor-client',
    description: 'JavaScript / TypeScript client for Thumbor (works on node and browser)️',
    url: 'https://github.com/azabroflovski/thumbor-client'
  },
  {
    title: 'onlinepbx',
    description: 'Simple and powerful onlinepbx telephony wrapper. (Written in TypeScript)',
    url: 'https://github.com/azabroflovski/onlinepbx'
  },
  {
    title: 'ezd',
    description: 'Bot for downloading content from popular platforms like TikTok, Instagram, etc.',
    url: 'https://t.me/ezd_robot'
  },
  {
    title: 'networth',
    description: 'Personal finance tracking app, available on web, android and iOS',
    url: 'https://networth.uz',
  }
]
</script>

<template>
  <div class="pt-6">
    <div class="grid sm:cols-2 gap-col-lg">
      <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project
          class="mb-4"
      />
    </div>
  </div>
</template>
