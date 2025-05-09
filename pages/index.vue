<script lang="ts" setup>
import data from "~/data/data.json";
import type { Data } from "~/types/types";

const recipes: Data = data;
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12 py-4">
    <div
      v-for="(recipe, index) in recipes.recipes"
      :key="recipe.id"
      :class="[
        'transition-all duration-300',
        index % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : '',
        index % 7 === 0 ? 'md:row-span-2' : '',
      ]"
    >
      <NuxtLink :to="`/recipes/${recipe.id}`" class="block h-full">
        <div
          class="border-2 border-purple-500 h-full py-4 px-4 rounded-lg hover:border-4 cursor-pointer transition-all duration-300"
        >
          <h2 class="font-bold text-xl">{{ recipe.name }}</h2>
          <p class="mt-2">{{ recipe.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
