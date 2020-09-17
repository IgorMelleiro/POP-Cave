<template>
  <div class="quadrinhos">
    <navbar />
    <bannerquadrinhos />
    <catquadrinhos />
    <footervue />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import bannerquadrinhos from '@/components/Banners/BannerQuadrinhos.vue'
import catquadrinhos from '@/components/categories/Catquadrinhos.vue'
import footervue from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    bannerquadrinhos,
    catquadrinhos,
    footervue
  }
}
</script>
