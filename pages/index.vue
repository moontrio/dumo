<script setup lang="ts">
import { getImgUrlWithWidth } from '~/utils/common'

const { result: songs } = await $fetch('/api/home/newSong')

const handleClickCover = () => {
  // console.log('click cover')
}
const handleClickPlay = () => {
  // console.log('click play')
}
</script>

<template>
  <div class="max-w-1080px min-w-720px mx-auto my-6">
    <div class="col-span-full my-6 text-3xl font-semibold">
      最新音乐
    </div>
    <div class="grid grid-flow-col grid-rows-5 grid-cols-2 justify-center gap-6">
      <div
        v-for="(song, index) in songs"
        :key="song.id"
        class="grid items-center gap-4 p-3 bg-white rounded-xl shadow"
        :style="{
          gridTemplateColumns: '16px 48px 3fr 5fr',
        }"
      >
        <span class="w-4">{{ index + 1 }}</span>
        <Cover
          class="w-48px rounded-md"
          :img-url="getImgUrlWithWidth(song.picUrl, 360)"
          play-btn-class="!w-1/2"
          @click-play="handleClickPlay"
          @click-cover="handleClickCover"
        />
        <span class="text-sm font-semibold">{{ song.song.name }}</span>
        <span class="text-xs text-gray-500">{{ song.song.artists[0].name }}</span>
      </div>
    </div>

    <div class="col-span-full my-6 text-3xl font-semibold">
      最新音乐
    </div>
    <div class="grid grid-cols-5 justify-center gap-6">
      <div
        v-for="song in songs"
        :key="song.id"
        class="flex flex-col"
      >
        <Cover
          class="rounded-2xl"
          :img-url="getImgUrlWithWidth(song.picUrl, 360)"
          play-btn-class="!w-1/4"
          @click-play="handleClickPlay"
          @click-cover="handleClickCover"
        />
        <span class="mt-5 text-sm font-semibold">{{ song.song.name }}</span>
        <span class="mt-2 text-xs text-gray-500">{{ song.song.artists[0].name }}</span>
      </div>
    </div>
  </div>
</template>
