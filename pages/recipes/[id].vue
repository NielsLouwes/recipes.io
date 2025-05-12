<script lang="ts" setup>
import data from "~/data/data.json";
const route = useRoute();
const { enableNoSleep, disableNoSleep } = useNuxtApp();
const isAwake = ref(false);

const { id } = useRoute().params;
console.log("data", data);

const getRecipeInfo = () => {
  return data.recipes.find((recipe) => recipe.id === Number(id));
};

const recipe = getRecipeInfo();

const toggleLock = () => {
  isAwake.value = !isAwake.value;
  isAwake.value ? enableNoSleep() : disableNoSleep();
};
console.log("route", route);
console.log("id", id);
console.log("recipe", recipe);
</script>

<template>
  <div class="flex flex-col w-[95%] md:w-[70%] gap-6 px-2 py-8 mx-auto">
    <h2 class="font-heading text-3xl tracking-wide">{{ recipe?.name }}</h2>
    <p class="font-body text-gray-600 italic">{{ recipe?.description }}</p>

    <div class="border border-gray-300 px-6 py-4 rounded-sm">
      <h2 class="font-heading text-xl mb-4">Ingredients</h2>
      <ul class="space-y-2">
        <li
          v-for="(ingredient, index) in recipe?.ingredients"
          :key="index"
          class="font-body text-gray-700"
        >
          • {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="border border-gray-300 px-6 py-4 rounded-sm">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-heading text-xl">Instructions</h2>
        <button
          class="border p-2 rounded-sm cursor-pointer"
          @click="toggleLock"
        >
          {{ isAwake ? "Unlock screen" : "Lock screen" }}
        </button>
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
