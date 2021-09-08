<script lang="ts">
import { defineComponent, defineNuxtMiddleware } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    // Redirect user to login if not authenticated ---------------------------|
    defineNuxtMiddleware(({ store, redirect }) => {
      if (!store.getters.username) redirect('/login')
    })
  },
})
</script>

<template>
  <div></div>
</template>
