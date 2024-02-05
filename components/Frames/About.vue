<script setup lang="ts">
const date = new Date("2022-04-21");
const dateFormated = formatDate(date);
</script>

<template>
  <div class="window-width mx-auto flex flex-col gap-5 my-10">
    <h2 id="about">Sobre</h2>

    <div class="flex gap-5 lg:flex-row flex-col">
      <article
        style="flex: 1"
        class="flex flex-col gap-3 h-[336px] overflow-auto text-justify"
      >
        <span>
          Me chamo Wesley Gomes de Araújo, sou graduado em Licenciatura em
          Matemática pela Universidade de Pernambuco. Iniciei meus estudos na
          área de programação em 2021 e atuo no mercado de desenvolvimento a
          mais de {{ dateFormated }}.
        </span>
        <span>
          Atualmente estudo e trabalho com Desenvolvimento Web, utilizando
          stacks como Node, React, Vue, Typescript e Go. Sempre me dedico em
          diversos projetos pessoais os quais compartilho em meu repositório no
          GitHub.
        </span>
        <span>
          Procuro contribuir o máximo para o crescimento e melhora da equipe e
          empresa que faço/farei parte, estou sempre disposto a aprender e me
          adaptar as diversas situações e desafios propostos, buscando evoluir
          como pessoa e profissional.
        </span>
      </article>

      <span style="flex: 1">
        <NuxtImg src="/about-image.jpg" alt="Wesley Araújo" />
      </span>
    </div>
  </div>
</template>
