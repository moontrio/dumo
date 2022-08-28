<script setup lang="ts">
import { menus } from '~~/constants/menus'

const route = useRoute()
</script>

<template>
  <div>
    <header class="flex-center h-64px">
      <NuxtLink
        v-for="menu in menus"
        :key="menu.title"
        class="mx-3 px-2.5 py-1 text-lg rounded-md hover:bg-slate-100"
        :class="[route.path === menu.to && 'text-blue-600 font-semibold']"
        :to="menu.to"
      >
        {{ menu.title }}
      </NuxtLink>
    </header>
    <slot role="main" />
  </div>
</template>
