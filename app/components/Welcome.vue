<script setup lang="ts">
const count = ref<number>(0)

const features = [
  '@nuxt/fonts',
  '@nuxt/icon',
  'Bun',
  'ESLint',
  'HTML Validator',
  'Prettier',
]

function increment() {
  count.value++
}
</script>

<template>
  <div class="h-full bg-emerald-950 font-[Inter] text-white">
    <div class="grid h-full place-items-center">
      <div class="flex flex-col gap-y-8">
        <h1
          class="text-brand-50 flex flex-col items-center text-center text-4xl font-black"
        >
          <span class="inline-flex items-center gap-x-3 text-emerald-400">
            <Icon name="simple-icons:nuxt" /> Nuxt 3
          </span>

          <span class="text-2xl">+</span>

          <span class="inline-flex items-center gap-x-3 text-sky-400">
            <Icon name="simple-icons:tailwindcss" /> Tailwind 4
          </span>
        </h1>

        <div class="text-center">
          <button
            type="button"
            class="bg-brand-400 hover:bg-brand-500 active:bg-brand-600 rounded-md px-4 py-2 text-black transition-colors"
            @click="increment"
          >
            Increment ({{ count }})
          </button>
        </div>

        <div class="mx-auto space-y-4">
          <p>Ready to use with:</p>

          <ul class="mx-auto w-fit list-disc">
            <li v-for="feature in features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
