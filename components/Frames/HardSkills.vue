<script setup lang="ts">
import { hardSkills } from "~/utils/constants";
</script>

<template>
  <section class="window-width mx-auto flex flex-col gap-5 my-10">
    <h2 id="hard-skills">Habilidades Técnicas</h2>

    <div class="flex w-full justify-center flex-wrap gap-10">
      <span
        v-for="item of hardSkills"
        class="bg-[#172435] flex flex-col text-white w-full md:w-[300px] h-[250px] rounded-lg p-5 gap-5"
      >
        <Icon :name="item.icon" size="40" class="text-white" />

        <b class="text-xl">{{ item.name }}</b>

        <span>{{ item.description }}</span>
      </span>
    </div>
  </section>
</template>
