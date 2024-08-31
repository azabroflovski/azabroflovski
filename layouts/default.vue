<template>
  <div class="mx-auto max-w-70ch py-6 px-4">
    <Author />
    <Navigation class="mt-3" />

    <div>
      <slot />
    </div>

    <div class="text-xs text-gray-500 mt-6">
      &copy; 2016 - 2024
    </div>
  </div>
</template>
