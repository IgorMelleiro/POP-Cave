<template>
  <div class="cinema">
    <navbar />
    <bannercinema />
    <catcinema />
    <footervue />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import bannercinema from '@/components/Banners/BannerCinema.vue'
import catcinema from '@/components/categories/Catcinema.vue'
import footervue from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    bannercinema,
    catcinema,
    footervue
  }
}
</script>
