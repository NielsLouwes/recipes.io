<script lang="ts" setup>
import data from '~/client/data/recipes.json'
import IngredientItem from '~/components/IngredientItem.vue'
import { useWakeLock } from '~/composables/useWakeLock'

const { id } = useRoute().params
const { isSupported, supportMessage } = useWakeLock()

const getRecipeInfo = () => {
  return data.recipes.find(recipe => recipe.id === Number(id))
}

const recipe = getRecipeInfo()

console.log('isSupported', isSupported)
console.log('supportMessage', supportMessage)
</script>

<template>
  <div class="flex flex-col w-[95%] md:w-[70%] gap-6 px-2 md:py-8 mx-auto">
    <h2 class="font-heading text-2xl md:text-4xl tracking-wide font-extrabold">
      {{ recipe?.name }}
    </h2>
    <p class="font-body text-gray-600 italic">{{ recipe?.description }}</p>

    <div class="border border-gray-300 px-2 md:px-4 py-4 rounded-sm">
      <h2 class="font-heading text-xl mb-4 font-bold">Ingredients</h2>
      <ul class="space-y-2 flex flex-col">
        <IngredientItem v-if="recipe" :recipe="recipe" />
      </ul>
    </div>

    <div class="border border-gray-300 px-2 md:px-4 py-4 rounded-sm">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-heading text-xl font-bold">Instructions</h2>

        <label class="flex items-center gap-2">
          <span class="font-body text-gray-700">Lock screen</span>
        </label>
      </div>
      <ol class="space-y-4">
        <li
          v-for="(instruction, index) in recipe?.instructions"
          :key="index"
          class="font-body text-gray-700 leading-relaxed"
        >
          <span class="font-medium">{{ index + 1 }}.</span> {{ instruction }}
        </li>
      </ol>
    </div>
  </div>
</template>
