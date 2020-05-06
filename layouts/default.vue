<script>
export default {
  name: 'LayoutDefault',
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer')
  }
}
</script>

<template>
  <div id="app" class="antialiased text-gray-500 font-base">
    <Header />

    <!-- Conteúdo injetado dinamicamente -->
    <nuxt />

    <Footer />
  </div>
</template>
