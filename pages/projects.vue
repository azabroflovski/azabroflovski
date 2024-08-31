<script lang="ts" setup>
const projects = [
  {
    title: 'AX MAP',
    description: '3D map of villas, apartment complexes and condos in Dubai. Users can view the interiors and exteriors of the property in detail.',
    url: 'https://axmap.ae',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 1.842l7 4.084v5.401c1.03.452 1.927 1.018 2.61 1.687c.828.81 1.39 1.825 1.39 2.986c0 1.963-1.566 3.472-3.482 4.43C17.542 21.418 14.883 22 12 22s-5.543-.582-7.518-1.57C2.566 19.472 1 17.964 1 16c0-1.161.562-2.175 1.39-2.986c.683-.67 1.58-1.235 2.61-1.687V5.926zM5 13.56a5.8 5.8 0 0 0-1.212.884C3.224 14.996 3 15.525 3 16c0 .798.673 1.79 2.376 2.641C7.02 19.463 9.36 20 12 20s4.98-.537 6.624-1.359C20.327 17.79 21 16.798 21 16c0-.475-.224-1.004-.788-1.557A5.8 5.8 0 0 0 19 13.56v.515l-7 4.084l-7-4.084zm12-.633V8.365l-4 2.223v4.671zm-6 2.333v-4.67L7 8.364v4.56zM7.876 6.563L12 8.856l4.124-2.293L12 4.158z"/></svg>',
    technologies: ['TypeScript', 'WebGL', 'Three', 'Vue', 'Node.js', 'Docker', 'Python', 'Go', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Bulavka',
    description: 'An e-commerce platform in Uzbekistan (marketplace) with over 100k users and 600+ sellers.',
    url: 'https://bulavka.uz',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"/></svg>',
    technologies: ['Scala', 'Go', 'PHP', 'TypeScript', 'Vue', 'Docker', 'MariaDB', 'Elasticsearch']
  },
  {
    title: 'ExpoClean',
    description: 'An app to keep track of dry cleaning processes, a desktop application for the cash register, and back-end software to track garment statuses.',
    url: 'https://expoclean.uz',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M10.5 18.5a5.5 5.5 0 0 1 10.865-1.218c-.264.276-.563.55-1.05.76c-.694.3-1.839.478-3.814-.016c-2.204-.55-3.69-.223-4.728.421a5 5 0 0 0-1.157 1.008l-.028.031a5.5 5.5 0 0 1-.088-.986M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm8.5 8a7.5 7.5 0 1 1 0 15a7.5 7.5 0 0 1 0-15m-4.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M17 7h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2"/></svg>',
    technologies: ['TypeScript', 'Node.js', 'Electron', 'Vue', 'nodb']
  },
  {
    title: 'networth',
    description: 'Personal finance tracking app, available on web, android and iOS',
    url: 'https://networth.uz',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.755 13.38v6.83a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54v-6.83a1.54 1.54 0 0 1 1.55-1.55h1.81a1.54 1.54 0 0 1 1.54 1.55m6.7-9.58v16.41a1.54 1.54 0 0 1-1.55 1.54h-1.81a1.55 1.55 0 0 1-1.55-1.54V3.8a1.56 1.56 0 0 1 1.55-1.55h1.81a1.55 1.55 0 0 1 1.55 1.55m6.69 5.18v11.23a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54V8.98a1.55 1.55 0 0 1 1.55-1.55h1.85a1.55 1.55 0 0 1 1.5 1.55"/></svg>',
    technologies: ['TypeScript', 'Bun', 'PHP', 'Docker', 'PostgreSQL', 'Laravel']
  },
  {
    title: 'ezd',
    description: 'Bot for downloading content from popular platforms like TikTok, Instagram, etc.',
    url: 'https://t.me/ezd_robot',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"/><path fill="currentColor" d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06z"/></svg>',
    technologies: ['TypeScript', 'Bun', 'Redis', 'Docker', 'PostgreSQL']
  },
  {
    title: 'FastNews',
    description: 'MASS MEDIA website in Uzbekistan, written in PHP and TypeScript',
    url: 'https://fastnews.uz',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M5 12v-2h2v2zm10-7.506A1.5 1.5 0 0 0 13.5 3H3.423a1.5 1.5 0 0 0-1.5 1.5v9a2.5 2.5 0 0 0 2.5 2.5h11.154a2.5 2.5 0 0 0 2.5-2.5v-6a1.5 1.5 0 0 0-1.5-1.5H16v7.23a.5.5 0 0 1-1 0zM4 6.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M9.5 9h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1M9 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M4.5 9h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/></svg>',
    technologies: ['JavaScript', 'PHP', 'Wordpress']
  },
  {
    title: 'Tiny Dialogue',
    description: 'Native, no overhead scripts, just dialog. Tiny wrapper over the <dialog>',
    url: 'https://github.com/azabroflovski/tiny-dialogue',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M28 4H10a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h18a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2m0 16H10V6h18Z"/><path fill="currentColor" d="M18 26H4V16h2v-2H4a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-2h-2Z"/></svg>',
    technologies: ['TypeScript', 'JavaScript'],
  },
  {
    title: 'mxik',
    description: 'Simple package for API calls tasnif.soliq.uz (written in TypeScript ⚡) ️',
    url: 'https://github.com/azabroflovski/mxik-js',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm18-5h3v10h-3v2h8v-2h-3V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4z"/></svg>',
    technologies: ['TypeScript', 'JavaScript'],
  },
  {
    title: 'thumbor-client',
    description: 'JavaScript / TypeScript client for Thumbor (works on node and browser)️',
    url: 'https://github.com/azabroflovski/thumbor-client',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm18-5h3v10h-3v2h8v-2h-3V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4z"/></svg>',
    technologies: ['TypeScript', 'JavaScript'],
  },
  {
    title: 'onlinepbx',
    description: 'Simple and powerful onlinepbx telephony wrapper. (Written in TypeScript)',
    url: 'https://github.com/azabroflovski/onlinepbx',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M8 9H4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm18-5h3v10h-3v2h8v-2h-3V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5h-4z"/></svg>',
    technologies: ['TypeScript', 'JavaScript'],
  },
]
</script>

<template>
  <div class="pt-6">
    <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project
        class="mb-4"
    />
  </div>
</template>
