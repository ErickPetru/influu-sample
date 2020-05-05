<script>
export default {
  name: 'AppHeader',
  components: {
    LogoInfluu: () => import('~/assets/img/logo-influu.svg?inline')
  }
}
</script>

<template>
  <header class="p-4">
    <LogoInfluu />
  </header>
</template>
