<script>
export default {
  name: 'Index',
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
  <main id="index">
    <div class="container max-w-screen-xl">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eius labore laborum ut cumque neque, magnam dignissimos animi alias voluptatibus optio? Similique beatae laboriosam vero eum deserunt possimus velit reprehenderit.</p>
    </div>
  </main>
</template>
