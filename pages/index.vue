<script lang="ts" setup>
import type { Data } from "~/types/types";
import { recipes } from '~/client/data/recipes.json'

// const { data } = await useFetch<Data>('/api/recipe')
// const recipesData = recipes.rec || []
console.log('recipes', recipes)


</script>
<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12 py-8"
  >
    <div
      v-for="(recipe, index) in recipes"
      :key="recipe.id"
      :class="[
        'transition-all duration-300',
        index % 5 === 0 ? 'md:col-span-2 lg:col-span-2' : '',
        index % 7 === 0 ? 'md:row-span-2' : '',
      ]"
    >
      <NuxtLink :to="`/recipes/${recipe.id}`" class="block h-full">
        <div
          class="border border-gray-300 h-full p-6 rounded-sm hover:border-purple-500 hover:border-[3px] transition-all duration-300"
        >
          <h2 class="font-heading text-2xl mb-3">{{ recipe.name }}</h2>
          <p class="font-body text-gray-600">{{ recipe.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
