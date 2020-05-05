<script>
export default {
  name: 'LayoutDefault',
  components: {
    AppHeader: () => import('~/components/AppHeader'),
    AppFooter: () => import('~/components/AppFooter')
  }
}
</script>

<template>
  <div id="app">
    <AppHeader />

    <!-- Conteúdo injetado dinamicamente -->
    <nuxt />

    <AppFooter />
  </div>
</template>
