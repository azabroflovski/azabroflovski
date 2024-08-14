<script lang="ts" setup>
import { useGreetings } from '~/composables/useGreetings'

const { greetings, updateGreetings } = useGreetings()
</script>

<template>
  <main class="content">
    <section class="text-gray-400">
      <h2 @click="updateGreetings()">{{ greetings }}, {guest}</h2>
      <p>
        Feel free to use this page as my CV.
        It includes highlights of my work and interests.
      </p>
      <p>
        Proficient in TypeScript, PHP, Go, Rust and Zig <sup>*slightly</sup> <br>

        Currently doing magic at <a href="https://www.linkedin.com/company/xt-xarid/">XT-XARID</a>
      </p>
      <p>
        My primary focus is delivering exceptional product solutions through
        well-structured, maintainable code. I thrive on tackling complex technical
        challenges and am proficient in rapidly acquiring new skills.
      </p>
      <p>
        My professional interests encompass architecting high-load systems,
        automating processes, and leveraging cutting-edge technologies to
        drive development efficiency.
      </p>
    </section>

    <section>
      <h3>Extra</h3>
      <p>
        I frequently write blog posts about open source,
        coding, and thoughts.
        Outside of programming, I have a passion for photography.
        You can check out some of my photos on Instagram.
        Sometimes I enjoy playing Dota, and
        I usually play mid on Invoker (30 tier).
      </p>

      <a href="https://github.com/azabroflovski.uz" target="_blank">GitHub</a>
      &nbsp;
      <a href="https://www.linkedin.com/in/azabroflovski" target="_blank">Linkedin</a>
      &nbsp;
      <a href="https://x.com/azabroflovski" target="_blank">X (old Twitter)</a>
      &nbsp;
      <a href="https://instagram.com/azabroflovski" target="_blank">Instagram</a>
    </section>
  </main>
</template>
