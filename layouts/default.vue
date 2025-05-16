<template>
  <div class="flex flex-col items-center">
    <NuxtLink to="/">
      <h1 class=" text-3xl md:text-5xl tracking-wide py-6 font-heading text-gray-800 font-extrabold">
        Recipes.io
      </h1>
    </NuxtLink>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>
