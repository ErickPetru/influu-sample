<script>
import resize from 'vue-resize-directive'

export default {
  name: 'Header',
  directives: {
    resize
  },
  filters: {
    'thousands-separator' (value) {
      return Number(value).toLocaleString()
    }
  },
  components: {
    Logo: () => import('@/components/Logo'),
    Menu: () => import('@/components/Menu'),

    IconDropdownArrow: () =>
      import('@/assets/img/icon-dropdown-arrow.svg?inline'),
    IconYouTube: () => import('@/assets/img/icon-youtube.svg?inline'),
    IconInstagram: () => import('@/assets/img/icon-instagram.svg?inline'),
    IconFacebook: () => import('@/assets/img/icon-facebook.svg?inline'),
    IconTwitter: () => import('@/assets/img/icon-twitter.svg?inline'),
    IconSearch: () => import('@/assets/img/icon-search.svg?inline'),
    IconMenu: () => import('@/assets/img/icon-menu.svg?inline')
  },
  props: {
    influencer: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      showMenu: false,
      showNetworks: false,
      documentWidth: 0
    }
  },
  computed: {
    isSmartphone () {
      return this.documentWidth < 768
    },

    isMobile () {
      return this.documentWidth < 1024
    },

    isNetworksVisible () {
      return !this.isSmartphone || this.showNetworks
    },

    isMenuVisible () {
      return this.isMobile && this.showMenu
    }
  },
  methods: {
    onResize () {
      this.documentWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      )
    }
  }
}
</script>

<template>
  <header class="pt-8 pb-6 mb-20 font-light text-white md:pb-0 lg:mb-32">
    <div class="container max-w-screen-xl">
      <div class="flex items-center justify-between">
        <Logo />

        <nav class="overflow-hidden">
          <transition name="fade">
            <Menu v-if="isMenuVisible" @close="showMenu = false" />
          </transition>

          <div class="flex">
            <ul class="hidden text-sm font-light uppercase lg:flex">
              <li class="flex mr-1">
                <a
                  href="#diversos"
                  class="px-4 py-2 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >Diversos</a>
              </li>
              <li class="flex mr-1">
                <a
                  href="#influenciadores"
                  class="px-4 py-2 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >Influenciadores</a>
              </li>
              <li class="flex mr-1">
                <a
                  href="#marketing"
                  class="px-4 py-2 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >Marketing</a>
              </li>
              <li class="flex mr-1">
                <a
                  href="#noticias"
                  class="px-4 py-2 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >Notícias</a>
              </li>
              <li class="flex mr-1">
                <a
                  href="#canal-influu"
                  class="px-4 py-2 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >Canal Influu</a>
              </li>
              <li class="flex">
                <a
                  href="#pesquisar"
                  class="flex items-center px-2 py-1 hoverable focusable hover:text-pink-800"
                  @click.prevent
                >
                  <IconSearch class="h-4" />
                </a>
              </li>
            </ul>

            <a
              href="#menu"
              class="flex items-center px-2 py-3 hoverable focusable hover:text-pink-800 lg:hidden"
              @click.prevent="showMenu = !showMenu"
            >
              <IconMenu class="h-5 lg:h-4" />
            </a>
          </div>
        </nav>
      </div>
    </div>

    <div class="container max-w-screen-xl lg:px-4">
      <div class="pt-4 lg:flex lg:pt-8 xl:pt-12">
        <img
          v-if="influencer && influencer.imageUrl"
          :src="influencer.imageUrl"
          alt="Foto de perfil"
          class="z-20 object-cover w-40 h-40 max-w-sm m-auto mt-0 border-4 border-pink-200 rounded-full shadow-lg lg:flex-grow-0 lg:w-64 lg:h-64 xl:w-76 xl:h-76 lg:-mb-32"
        />

        <h2
          v-if="influencer && influencer.name"
          class="mt-2 text-2xl font-light text-center lg:text-left lg:flex-grow lg:text-5xl lg:ml-10 lg:pt-6 xl:ml-12 xl:pt-10"
        >{{ influencer.name }}</h2>
      </div>
    </div>

    <div
      v-resize.initial:debounce="onResize"
      class="relative flex flex-col mx-4 mt-5 -mb-12 shadow md:mb-0 md:mx-0 md:bg-purple-600 lg:mt-0"
    >
      <a
        href="/"
        class="z-10 flex justify-between flex-grow px-5 py-3 text-lg text-white bg-purple-600 rounded-md hoverable focusable hover:text-pink-800 md:hidden"
        @click.prevent="showNetworks = !showNetworks"
      >
        <span>Redes sociais</span>
        <IconDropdownArrow
          class="w-6 text-2xl"
          :style="{ transform: showNetworks ? 'rotateZ(180deg)' : null }"
        />
      </a>

      <transition v-if="influencer" :name="isSmartphone ? 'slide-y' : null">
        <div v-show="isNetworksVisible" class="container max-w-screen-xl px-0 lg:px-4">
          <ul
            class="absolute justify-center w-full pt-3 mt-12 text-sm tracking-wide bg-purple-600 -top-6px md:relative md:pt-0 md:mt-0 md:top-0 md:flex lg:justify-start lg:pl-68 xl:pl-80"
          >
            <li v-if="influencer.youtube">
              <a
                :href="`https://www.youtube.com/${influencer.youtube.username}`"
                target="_blank"
                class="flex px-5 py-2 border-b hoverable focusable hover:text-pink-800 border-white-10 md:border-b-0 md:border-r md:border-white-40 md:py-4 lg:px-4 xl:px-8"
              >
                <IconYouTube class="w-8 mr-3 text-2xl" />

                <div class="leading-tight">
                  <p>
                    <strong class="font-medium">/{{ influencer.youtube.username }}</strong>
                  </p>
                  <p class="font-normal">+ {{ influencer.youtube.followers | thousands-separator }}</p>
                </div>
              </a>
            </li>

            <li v-if="influencer.instagram">
              <a
                :href="`https://www.instagram.com/${influencer.instagram.username}`"
                target="_blank"
                class="flex px-5 py-2 border-b hoverable focusable hover:text-pink-800 border-white-10 md:border-b-0 md:border-r md:border-white-40 md:py-4 lg:px-4 xl:px-8"
              >
                <IconInstagram class="w-6 ml-1 mr-2 text-2xl" />

                <div class="leading-tight">
                  <p>
                    <strong class="font-medium">@{{ influencer.instagram.username }}</strong>
                  </p>
                  <p
                    class="font-normal"
                  >+ {{ influencer.instagram.followers | thousands-separator }}</p>
                </div>
              </a>
            </li>

            <li v-if="influencer.facebook">
              <a
                :href="`https://www.facebook.com/${influencer.facebook.username}`"
                target="_blank"
                class="flex px-5 py-2 border-b hoverable focusable hover:text-pink-800 border-white-10 md:border-b-0 md:border-r md:border-white-40 md:py-4 lg:px-4 xl:px-8"
              >
                <IconFacebook class="w-6 ml-1 mr-2 text-2xl" />

                <div class="leading-tight">
                  <p>
                    <strong class="font-medium">/{{ influencer.facebook.username }}</strong>
                  </p>
                  <p class="font-normal">+ {{ influencer.facebook.followers | thousands-separator }}</p>
                </div>
              </a>
            </li>

            <li v-if="influencer.twitter">
              <a
                :href="`https://www.twitter.com/${influencer.twitter.username}`"
                target="_blank"
                class="flex px-5 py-2 hoverable focusable hover:text-pink-800 md:py-4 lg:px-4 xl:px-8"
              >
                <IconTwitter class="w-6 ml-1 mr-2 text-2xl" />

                <div class="leading-tight">
                  <p>
                    <strong class="font-medium">@{{ influencer.twitter.username }}</strong>
                  </p>
                  <p class="font-normal">+ {{ influencer.twitter.followers | thousands-separator }}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
header {
  --linear-gradient: linear-gradient(
    90deg,
    var(--color-purple-400) 0%,
    var(--color-pink-300) 100%
  );
  background-image: url('../assets/img/header-circles-sm.svg'),
    var(--linear-gradient);
  background-repeat: no-repeat;
  background-position: right top, center;
  background-size: 42.5% auto, 1540px 100%;
}

@media (min-width: 1024px) {
  header {
    background-image: url('../assets/img/header-circles-md.svg'),
      var(--linear-gradient);
    background-size: auto calc(100% - 4.125rem), cover;
  }
}
</style>
