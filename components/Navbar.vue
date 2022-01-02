<template>
  <div
    class="max-w-full text-black py-8 lg:py-5 mx-10 flex justify-between items-center drawer"
  >
    <div class="flex w-full lg:w-auto justify-between items-center lg:justify-start lg:space-x-12">
      <nuxt-link to="/">
        <nuxt-img src="/logo_wide.svg" />
      </nuxt-link>
      <nuxt-img src="/menu-outline.svg" class="cursor-pointer h-6 w-6 lg:hidden" />
      <div class="space-x-8 text-base hidden lg:flex">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/campaign">Campaign</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
    <div class="hidden lg:flex space-x-9 justify-end items-center">
      <nuxt-img src="/search.svg" class="cursor-pointer" />
      <nuxt-link class="text-primary-orange" to="/login">Log in</nuxt-link>
      <button
        class="py-[10px] px-6 text-white bg-primary-blue"
        @click="registerUser"
      >
        Get Started
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter()

    const registerUser = () => {
      router.push('/register')
    }

    return { registerUser }
  },
})
</script>

<style></style>
