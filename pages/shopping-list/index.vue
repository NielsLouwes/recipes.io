<script lang="ts" setup>
import { useShoppingList } from '~/composables/useShoppingList'

const { shoppingList } = useShoppingList()
</script>

<template>
  <div class="w-[95%] px-2">
    <h1 class="text-2xl mb-4">Shopping list</h1>
    <ul v-if="shoppingList.length" class="border-2 px-4 md:px-12 py-6 rounded-lg w-[95%]">
      <li v-for="(item, index) in shoppingList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
