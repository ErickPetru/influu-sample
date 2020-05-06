<script>
export default {
  name: 'Logo',
  components: {
    Influu: () => import('@/assets/img/logo-influu.svg?inline'),
    MediaKit: () => import('@/assets/img/logo-midiakit.svg?inline')
  },
  props: {
    mode: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    hasLink () {
      return this.mode === 'default'
    }
  }
}
</script>

<template>
  <nuxt-link
    v-if="hasLink"
    to="/"
    class="leading-none text-white focusable hoverable hover:text-pink-800 outline-offset-outer"
  >
    <h1 class="inline-flex items-center">
      <Influu class="flex-grow mr-3" />
      <MediaKit class="flex-grow" />
    </h1>
  </nuxt-link>

  <h6 v-else :class="mode" class="inline-flex items-center">
    <Influu class="flex-grow" />
  </h6>
</template>

<style scoped>
.watermark {
  height: 2rem;
}

.watermark svg {
  height: 100%;
}

.watermark svg #circle {
  fill: currentColor;
}

.watermark svg #path {
  fill: var(--color-purple-500);
}
</style>
