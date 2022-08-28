<script setup>
useHead({
  title: 'Dumo Music',
  meta: [
    { name: 'description', content: 'Dumo Music' },
    { name: 'keywords', content: 'Nuxt 3' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
