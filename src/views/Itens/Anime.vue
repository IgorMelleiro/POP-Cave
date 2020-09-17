<template>
  <div class="anime">
    <navbar />
    <banneranime />
    <catanime />
    <footervue />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import banneranime from  '@/components/Banners/BannerAnime.vue'
import catanime from '@/components/categories/Catanime.vue'
import footervue from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    banneranime,
    catanime,
    footervue
  }
}
</script>
