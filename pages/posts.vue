<template>
  <div class="py-6">
    <ContentList path="/posts">
      <template #default="{ list }">
        <PostCard v-for="post in list" :key="post._path" :post="post" />
      </template>

      <template #not-found>
        <div>No posts.</div>
      </template>
    </ContentList>
  </div>
</template>
