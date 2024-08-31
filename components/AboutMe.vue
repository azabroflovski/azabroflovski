<script lang="ts" setup>
import { useGreetings } from '~/composables/useGreetings'

const { greetings, updateGreetings } = useGreetings()
</script>

<template>
  <main class="text-base prose @light:prose-truegray">
    <section>
      <h2 @click="updateGreetings()">{{ greetings }}, {guest}</h2>
      <p>
        Feel free to use this page as my resume. It highlights the key aspects of my work and interests.
        Currently doing magic at <a href="https://www.linkedin.com/company/xt-xarid/">XT-XARID</a> <br>
      </p>
      <p>
        Proficient in TypeScript, PHP, Go, Rust and Zig <sup>*slightly</sup>
      </p>
      <p>
        My primary focus is delivering exceptional product solutions through well-organized, maintainable code.
        I thrive on tackling complex technical challenges and am proficient in rapidly acquiring new skills.
      </p>

      <p>
        My professional interests encompass architecting high-load systems, automating processes, and leveraging
        cutting-edge technologies to drive development efficiency.
      </p>

      <p>
        I quickly pick up new technologies, programming languages, and frameworks.
      </p>
    </section>

    <section>
      <h3>Other</h3>
      <p>
        Sometimes, I share my thoughts in a <NuxtLink to="/posts">blog</NuxtLink>.
        Outside of programming, I have a passion for photography. You can check out some of my photos on Instagram.
      </p>

      <p>
        Occasionally, I enjoy playing Dota, usually mid, and my main hero is Invoker (30-tier).
      </p>

      <a href="https://github.com/azabroflovski" target="_blank">GitHub</a>
      &nbsp;
      <a href="https://www.linkedin.com/in/azabroflovski" target="_blank">Linkedin</a>
      &nbsp;
      <a href="https://x.com/azabroflovski" target="_blank">X (old Twitter)</a>
      &nbsp;
      <a href="https://instagram.com/azabroflovski" target="_blank">Instagram</a>
    </section>
  </main>
</template>
