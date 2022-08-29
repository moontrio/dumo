<script setup lang="ts">
import { getImgUrlWithWidth } from '~/utils/common'

const { result: songs } = await $fetch('/api/home/newSong', {
  params: {
    realIP: '211.161.244.70',
  },
  headers: {
    'X-Real-IP': '211.161.244.70',
  },
})

const handleClickCover = () => {
  // console.log('click cover')
}
const handleClickPlay = () => {
  // console.log('click play')
}
</script>

<template>
  <div class="grid grid-flow-col gap-6 px-6">
    <div
      v-for="song in songs"
      :key="song.id"
      class="flex flex-col"
    >
      <Cover
        class="rounded-2xl w-170px"
        :img-url="getImgUrlWithWidth(song.picUrl, 320)"
        @click-play="handleClickPlay"
        @click-cover="handleClickCover"
      />
      <span class="mt-5 text-sm font-semibold">{{ song.song.name }}</span>
      <span class="mt-2 text-xs text-gray-500">{{ song.song.artists[0].name }}</span>
    </div>
  </div>
</template>
