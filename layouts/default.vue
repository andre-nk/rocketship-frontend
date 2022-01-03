<template>
  <div class="bg-white max-w-full">
    <Navbar />
    <div class="pt-4 pb-8">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    return { Navbar }
  },
}
</script>
