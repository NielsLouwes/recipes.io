<script lang="ts" setup>
import data from "~/data/data.json";
import type { Data } from "~/types/types";

const recipes: Data = data;
</script>
<template>
  <div class="flex flex-col gap-4">
    <div v-for="recipe in recipes.recipes" :key="recipe.id">
      <NuxtLink :to="`/recipes/${recipe.id}`">
        <div
          class="border-2 border-purple-500 w-80 py-4 px-4 rounded-lg hover:border-4 cursor-pointer"
        >
          <h2 class="font-bold">{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
