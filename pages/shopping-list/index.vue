<script lang="ts" setup>
// Access the global shopping list state
const shoppingList = useState<string[]>('shopping-list', () => [])
</script>

<template>
  <div>
    <h1 class="text-2xl mb-4">Shopping list</h1>
    <ul class="border-2 px-4 md:px-12 py-6 rounded-lg w-full">
      <li v-for="(item, index) in shoppingList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
