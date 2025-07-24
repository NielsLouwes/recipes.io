<script lang="ts" setup>
import type { Recipe } from '@/types/types'
import { useShoppingList } from '~/composables/useShoppingList'

interface IngredientItemProps {
  recipe: Recipe
}

const { recipe } = defineProps<IngredientItemProps>()
const { addItemToShoppingList } = useShoppingList()
</script>

<template>
  <div>
    <li
      v-for="(ingredient, index) in recipe?.ingredients"
      :key="index"
      class="font-body text-gray-700 flex justify-between"
    >
      • {{ ingredient }}
      <span class="cursor-pointer" @click="addItemToShoppingList(ingredient)"> + </span>
    </li>
  </div>
</template>
