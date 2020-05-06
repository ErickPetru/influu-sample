<script>
export default {
  name: 'Logo',
  components: {
    Influu: () => import('@/assets/img/logo-influu.svg?inline'),
    MediaKit: () => import('@/assets/img/logo-midiakit.svg?inline')
  }
}
</script>

<template>
  <nuxt-link to="/" class="leading-none text-white focusable hoverable hover:text-pink-800 outline-offset-outer">
    <h1 class="inline-flex items-center ">
      <Influu class="flex-grow mr-3" />
      <MediaKit class="flex-grow" />
    </h1>
  </nuxt-link>
</template>
