<template>
  <main class="text-base prose @light:prose-zinc xl:text-lg">
    <ContentDoc>
      <template #not-found>
        <div class="py-6">
          <div class="mb-2">Page not found</div>
          <NuxtLink to="/">cd ../</NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<style>
.prose h1 a,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
  text-decoration: none;
  position: relative;
}

.prose h1 a::before,
.prose h2 a::before,
.prose h3 a::before,
.prose h4 a::before,
.prose h5 a::before,
.prose h6 a::before {
  content: '#';
  position: absolute;
  left: -40px;
  opacity: 0;
  transition: 300ms ease;
}

.prose h1:hover a::before,
.prose h2:hover a::before,
.prose h3:hover a::before,
.prose h4:hover a::before,
.prose h5:hover a::before,
.prose h6:hover a::before {
  opacity: 1;
  left: -30px;
}
</style>