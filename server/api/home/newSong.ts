import { baseURL } from '~~/server/constants'

export default defineEventHandler(() => {
  return $fetch(`${baseURL}/personalized/newsong`)
})
