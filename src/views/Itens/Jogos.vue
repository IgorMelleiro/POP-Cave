<template>
  <div class="jogos">
    <navbar />
    <bannerjogos />
    <catjogos />
    <footervue />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import bannerjogos from '@/components/Banners/BannerJogos.vue'
import catjogos from '@/components/categories/Catjogos.vue'
import footervue from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    bannerjogos,
    catjogos,
    footervue
  }
}
</script>
