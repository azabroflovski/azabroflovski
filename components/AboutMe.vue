<script lang="ts" setup>
import { useGreetings } from '~/composables/useGreetings'

const { greetings, updateGreetings } = useGreetings()
</script>

<template>
  <main class="content">
    <section>
      <h1 @click="updateGreetings()">{{ greetings }}, <code>{Guest}</code></h1>
      <p>
        I am software developer from Tashkent ☀️
        <sup style="font-size: 12px">(sunny Uzbekistan)</sup> <br>
        Feel free to use this page as my CV.
        It includes highlights of my work and interests.
      </p>
      <p>
        Proficient in <code>TypeScript, PHP, Go and (Rust, Zig)</code>
        <sup>*slightly</sup> <br>

        Currently doing magic at <a href="https://www.linkedin.com/company/xt-xarid/">XT-XARID</a>
      </p>
      <p>

      </p>
      <p>
        My main focus is on delivering high-quality solutions for
        products and crafting well-organized, maintainable code
        with a long-term perspective. I am adept at quickly learning
        new technologies, programming languages, and frameworks.
      </p>

      <p>
        Professionally, I am interested in designing architectures
        for high-load applications, solving complex technical
        challenges, automating and enhancing development processes,
        and leveraging modern tools and technologies.
      </p>

      <p></p>
    </section>

<!--    <section>-->
<!--      <h3>./web/client.md</h3>-->
<!--      <p>-->
<!--        I love Vue.js and believe it has the best reactivity API.-->
<!--        Writing UI with Vue.js is a pleasure. I started with Angular-->
<!--        a long time ago, then moved to React and worked with it-->
<!--        for a relatively long time. After a while, I settled on Vue and-->
<!--        since then, it has been my main framework for creating UI.-->
<!--      </p>-->

<!--      <p>-->
<!--        I tried Svelte where I needed to save bandwidth and-->
<!--        optimize for mobile (calculators, widgets, and simple sites.)-->
<!--        It's a great tool, but I haven't tried using it for something-->
<!--        large in production; I didn't want to take the risk.-->
<!--      </p>-->

<!--      <p>-->
<!--        Sometimes I return to Svelte when I need to create-->
<!--        something small and integrate it without dragging-->
<!--        along a framework.-->
<!--      </p>-->

<!--      <p style="font-size: 12px">-->
<!--        p.s I can work with any framework, but I don't follow the-->
<!--        others as actively, so it might take me a bit of time-->
<!--        to get into their ecosystem.-->
<!--      </p>-->
<!--    </section>-->

<!--    <section>-->
<!--      <h3>./web/server.md</h3>-->
<!--      <p>-->
<!--        I have a bit of a "zoo" on the backend, depending on-->
<!--        my mood (no :3) <br>-->

<!--        Currently, I use TypeScript, PHP, and Rust commercially.-->
<!--      </p>-->

<!--      <p>-->
<!--        The mood part has a grain of truth — for personal projects,-->
<!--        I write in the languages I know and choose based on-->
<!--        the tasks at hand (TypeScript, PHP, Go, Rust, Zig, Dart).-->
<!--      </p>-->
<!--    </section>-->

    <section>
      <h3>Extra</h3>
      <p>
        I frequently write blog posts about open source,
        coding, and thoughts.
      </p>

      <p>
        Outside of programming, I have a passion for photography.
        You can check out some of my photos on Instagram.
      </p>
      <p>
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

