<template>
  <div class="author">
    <img src="/logo.jpg" alt="snake logo">
    <div class="author__meta">
      <div class="author__name">
        Aza Broflovski
      </div>
      <div class="author__description">
        Software developer from sunny Tashkent ☀️
      </div>
    </div>
  </div>
</template>

<style>
.author {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.author img {
  width: 66px;
  height: 66px;
  border-radius: 50px;
}

.author__meta {
  margin-left: 20px;
}

.author__name {
  font-size: 18px;
  color: #fff;
  line-height: 1;
  margin-bottom: 8px;
}

.author__description {
  font-size: 14px;
  line-height: 1.6;
}
</style>
