<script lang="ts" setup>
const projects = [
  {
    title: 'AX MAP',
    description: '3D map of villas, apartment complexes and condos in Dubai. Users can view the interiors and exteriors of the property in detail. Written in TypeScript, Node.js, Go and Python.',
    url: 'https://axmap.ae',
  },
  {
    title: 'Bulavka',
    description: 'An e-commerce platform in Uzbekistan (marketplace) with over 100k users and 600+ sellers. Powered by Scala, Go, PHP, and TypeScript.',
    url: 'https://bulavka.uz',
  },
  {
    title: 'ExpoClean',
    description: 'An app to keep track of dry cleaning processes, a desktop application for the cash register, and back-end software to track garment statuses. Written in TypeScript, Node.js and Electron',
    url: 'https://excpoclean.uz',
  },
  {
    title: 'networth',
    description: 'Personal finance tracking app, available on web, android and iOS',
    url: 'https://networth.uz',
  },
  {
    title: 'ezd',
    description: 'Bot for downloading content from popular platforms like TikTok, Instagram, etc.',
    url: 'https://t.me/ezd_robot'
  },
  {
    title: 'Fast News',
    description: 'MASS MEDIA website in Uzbekistan, written in PHP and TypeScript',
    url: 'https://fastnews.uz',
  },
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
]
</script>

<template>
  <div class="pt-6">
    <div class="grid  gap-col-lg">
      <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project
          class="mb-4"
      />
    </div>
  </div>
</template>
