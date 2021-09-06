<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const name: Ref<string> = ref('Nuxt')

    return { name }
  },
})
</script>

<template>
  <div class="home__wrapper">
    <h1 class="home__title">Hello, {{ name }}!</h1>
  </div>
</template>

<style lang="postcss">
.home__wrapper {
  @apply h-screen;
  @apply grid place-items-center;
  @apply bg-dark-800;

  .home__title {
    @apply text-9xl text-transparent font-bold;
    @apply bg-gradient-to-r bg-clip-text;
    @apply from-blue-500 via-teal-500 to-green-400;
  }
}
</style>
