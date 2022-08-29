import { defineConfig, transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  },
  theme: {
    colors: {},
  },
})
