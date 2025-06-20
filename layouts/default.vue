<script lang="ts" setup>
const route = useRoute()

const isShoppingListPath = computed(() => {
  return route.path === '/shopping-list'
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex items-center gap-12">
      <NuxtLink to="/">
        <h1
          class="text-3xl md:text-5xl tracking-wide py-6 font-heading text-gray-800 font-extrabold"
        >
          Recipes.io
        </h1>
      </NuxtLink>
      <NuxtLink v-if="!isShoppingListPath" to="/shopping-list">
        <button class="border-2 border-gray-300 p-2 rounded-lg hover:border-purple-500">
          Shopping List
        </button>
      </NuxtLink>
    </div>
    <slot />
  </div>
</template>
