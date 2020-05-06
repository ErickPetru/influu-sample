<script>
export default {
  name: 'Menu',
  components: {
    Logo: () => import('@/components/Logo'),

    IconDashboard: () => import('@/assets/img/icon-dashboard.svg?inline'),
    IconBell: () => import('@/assets/img/icon-bell.svg?inline'),
    IconGlobe: () => import('@/assets/img/icon-globe.svg?inline'),
    IconProfile: () => import('@/assets/img/icon-profile.svg?inline'),
    IconFinances: () => import('@/assets/img/icon-finances.svg?inline'),
    IconClose: () => import('@/assets/img/icon-close.svg?inline')
  },
  data () {
    return {
      animation: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.animation = 'fade-scale-in'
    })
  },
  methods: {
    close () {
      this.animation = 'fade-scale-out'

      this.$nextTick(() => {
        this.$emit('close')
      })
    }
  }
}
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-30 h-screen pl-12 bg-white-50 font-alternate"
    @click.prevent="close"
  >
    <nav class="w-full h-full shadow-xl" :class="animation" @click.stop.prevent>
      <button class="absolute flex justify-center outline-none close hoverable" @click.prevent="close">
        <IconClose class="w-8" />
      </button>

      <div class="flex flex-col w-full h-full overflow-auto">
        <div class="pt-10 pb-8 mx-6 mb-6 leading-none text-center border-b border-white-20">
          <img
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
            alt="Foto de perfil"
            class="object-cover w-32 h-32 max-w-sm m-auto mt-0 border-8 rounded-full border-white-10"
          />

          <h2 class="mt-4 text-lg font-medium tracking-wide">Fulano de Tal</h2>

          <h3 class="mt-1 text-sm font-light tracking-wide text-pink-100">Youtuber</h3>

          <button
            class="px-4 py-2 mt-6 text-sm font-light rounded bg-white-10 hoverable focusable hover:bg-pink-800"
            @click.prevent
          >Editar perfil</button>
        </div>

        <ul class="flex flex-col flex-grow font-light">
          <li class="py-1">
            <nuxt-link
              to="/"
              exact
              class="flex items-center px-10 py-3 hoverable focusable hover:bg-white-10"
              @click.prevent
            >
              <IconDashboard class="w-6 mr-6" />
              <span>Dashboard</span>
            </nuxt-link>
          </li>
          <li class="py-1">
            <a
              href="#notificacoes"
              class="flex items-center px-10 py-3 hoverable focusable hover:bg-white-10"
              @click.prevent
            >
              <IconBell class="w-6 mr-6" />
              <span>Notificações</span>
            </a>
          </li>
          <li class="py-1">
            <a
              href="#campanhas"
              class="flex items-center px-10 py-3 hoverable focusable hover:bg-white-10"
              @click.prevent
            >
              <IconGlobe class="w-6 mr-6" />
              <span>Campanhas</span>
            </a>
          </li>
          <li class="py-1">
            <a
              href="#meu-perfil"
              class="flex items-center px-10 py-3 hoverable focusable hover:bg-white-10"
              @click.prevent
            >
              <IconProfile class="w-6 mr-6" />
              <span>Meu perfil</span>
            </a>
          </li>
          <li class="py-1">
            <a
              href="#financeiro"
              class="flex items-center px-10 py-3 hoverable focusable hover:bg-white-10"
              @click.prevent
            >
              <IconFinances class="w-6 mr-6" />
              <span>Financeiro</span>
            </a>
          </li>
        </ul>

        <div class="flex flex-col px-6 pt-12 pb-10 leading-none text-center footer">
          <button
            class="px-4 py-3 text-sm uppercase rounded bg-white-10 hoverable focusable hover:bg-pink-800"
            @click.prevent
          >Sair</button>

          <Logo class="mt-8" mode="watermark" />
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  background: url('~assets/img/menu-bg-top.svg'), linear-gradient(
    90deg,
    var(--color-purple-300) 0%,
    var(--color-pink-200) 102%
  );
  background-repeat: no-repeat;
  background-position: top right, center;
  background-size: 155px 94px, cover;
  border-radius: 15px 0px 0px 15px;
}

ul .link-exact-active {
  @apply border-r-8;
  @apply border-purple-600;
}

ul .link-exact-active:not(:hover) {
  @apply bg-white-5;
}

.footer {
  background: url('~assets/img/menu-bg-bottom.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 166px 108px;
}

.footer button {
  background: linear-gradient(
    179.81deg,
    var(--color-purple-500) 0.98%,
    var(--color-purple-600) 99.03%
  );
  box-shadow: inset 0 0 50px color-mod(var(--color-pink-800) a(0%)),
    0px 0px 11px rgba(149, 149, 149, 0.2);
}

.footer button:hover {
  box-shadow: inset 0 0 100px 100px var(--color-pink-800),
    0px 0px 11px rgba(149, 149, 149, 0.2);
}

.close {
  position: fixed;
  width: 55px;
  height: 55px;
  top: 55px;
  left: -1.75rem;
  background: linear-gradient(90.01deg, #eb3f87 0.01%, #c53a97 100.9%), #796c96;
  box-shadow: inset 0 0 50px color-mod(var(--color-pink-800) a(0%)),
    0px 0px 11px rgba(149, 149, 149, 0.2);
  border-radius: 50%;
  z-index: 1;
}

.close:hover,
.close:focus {
  box-shadow: inset 0 0 100px 100px var(--color-pink-800),
    0px 0px 11px rgba(149, 149, 149, 0.2);
}
</style>
