<script lang="ts" setup>
import data from "~/data/data.json";
import type { Data } from "~/types/types";

const recipes: Data = data;
</script>
<template>
  <div>
    <h1>Recipes</h1>
    <div v-for="recipe in recipes.recipes" :key="recipe.id">
      <div class="border-2 w-40 flex flex-col gap-4 py-4 px-2">
        <h2 class="font-bold">{{ recipe.name }}</h2>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>
