<template>
  <div class="author inline-flex items-center" @click="$router.push('/')">
    <img
        src="/logo.jpg"
        alt="snake logo"
        class="sm:w-50px w-50px b-rd-50% mr-16px rounded-50% @light:border-solid @light:border-1 border-gray-200"
    >
    <div>
      <div class="text-lg text-dark @dark:text-light font-bold line-height-none">
        Aza Broflovski
      </div>
      <div class=" text-sm text-gray-400 line-height-none mt-1.6">
        Software developer from Tashkent
      </div>
    </div>
  </div>
</template>
