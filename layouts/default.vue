<template>
  <div class="bg-white max-w-full">
    <Navbar />
    <div class="pt-4 pb-8">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  setup() {
    return { Navbar }
  },
}
</script>

<style></style>
