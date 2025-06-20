<script lang="ts" setup>
// Create a reactive state and set default value
let shoppingList = useState('shopping-list', () => [])
</script>

<template>
  <div>
    <h1 class="text-2xl">Shopping list</h1>
    <div v-for="item in shoppingList">
      {{ item }}
    </div>
  </div>
</template>
