<script setup lang="ts">
interface Props {
  imgUrl: string
  showShadow?: boolean
  playBtnClass?: string
}

interface Emits {
  (e: 'clickCover'): void
  (e: 'clickPlay'): void
}

withDefaults(defineProps<Props>(), {
  showShadow: true,
})

const emit = defineEmits<Emits>()
</script>

<template>
  <div class="cover relative">
    <img
      class="cover-img rounded-inherit cursor-pointer select-none"
      :src="imgUrl"
      loading="lazy"
      @click="$emit('clickCover')"
    >

    <div
      class="cover-btn absolute-center p-2/100 w-1/5 aspect-square text-white bg-white/14 backdrop-blur border border-white/8 rounded-full cursor-pointer"
      :class="playBtnClass"
      @click="emit('clickPlay')"
    >
      <div class="i-ri-play-fill wh-full" />
    </div>

    <div
      v-if="showShadow"
      class="cover-shadow absolute -z-1 top-5/100 wh-full bg-cover blur-lg opacity-60 rounded-inherit"
      scale="x-92 y-96"
      :style="{ backgroundImage: `url(${imgUrl})` }"
    />
  </div>
</template>

<style>
.cover-btn {
  opacity: 0;
  visibility: hidden;

  transition:
    opacity 200ms ease-in-out,
    background 150ms ease-in-out;
}

.cover:hover .cover-btn {
  opacity: 1;
  visibility: visible;
}

.cover-btn:hover {
  background: hsla(0, 0%, 100%, .28);
}
</style>
