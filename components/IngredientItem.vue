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
  <li
    v-for="(ingredient, index) in recipe?.ingredients"
    :key="index"
    class="font-body text-gray-700 flex justify-between w-[95%] cursor-pointer"
    @click="addItemToShoppingList(ingredient)"
  >
    • {{ ingredient }}
  </li>
</template>
