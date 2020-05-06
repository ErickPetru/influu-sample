<script>
export default {
  name: 'Index',
  components: {
    Header: () => import('~/components/Header'),
    Footer: () => import('~/components/Footer')
  },
  async asyncData ({ $axios }) {
    const influencer = await $axios({
      method: 'post',
      data: {
        query: `
          query getInfluencer {
            getInfluencer {
              name
              about
              imageUrl
              youtube {
                username
                followers
              }
              instagram {
                username
                followers
              }
              facebook {
                username
                followers
              }
              twitter {
                username
                followers
              }
            }
          }
        `
      }
    })

    return {
      influencer: influencer.data ? influencer.data.data.getInfluencer : null
    }
  }
}
</script>

<template>
  <div>
    <Header :influencer="influencer" />

    <main id="index">
      <div class="container max-w-screen-xl">
        <p v-if="influencer && influencer.about">{{ influencer.about }}</p>
      </div>
    </main>

    <Footer />
  </div>
</template>
