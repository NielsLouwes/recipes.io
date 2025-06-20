<script lang="ts" setup>
import type { Recipe } from '@/types/types'

interface IngredientItemProps {
  recipe: Recipe
}

const { recipe } = defineProps<IngredientItemProps>()
console.log('recipe', recipe)

const shoppingList = useState<string[]>('shopping-list', () => [])
console.log('shoppingList', shoppingList.value)

const addItemToShoppingList = (ingredient: string) => {
  console.log('clicked!')
  if (!shoppingList.value.includes(ingredient)) {
    return shoppingList.value.push(ingredient)
  }
}
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
