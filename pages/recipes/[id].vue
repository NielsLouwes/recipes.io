<script lang="ts" setup>
import data from "~/data/data.json";
const route = useRoute();

const { id } = useRoute().params;
console.log("data", data);

const getRecipeInfo = () => {
  return data.recipes.find((recipe) => recipe.id === Number(id));
};

const recipe = getRecipeInfo();
console.log("route", route);
console.log("id", id);
console.log("recipe", recipe);
</script>

<template>
  <div class="flex flex-col items-center w-[70%] gap-4">
    <h2>{{ recipe?.name }}</h2>
    <p>{{ recipe?.description }}</p>
    <p>{{ recipe?.ingredients }}</p>
    <p>{{ recipe?.instructions }}</p>
  </div>
</template>
