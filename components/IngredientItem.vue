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
    class="font-body text-gray-700 flex justify-between p-1 w-[95%]"
    @click="addItemToShoppingList(ingredient)"
  >
    • {{ ingredient }}
  </li>
</template>
