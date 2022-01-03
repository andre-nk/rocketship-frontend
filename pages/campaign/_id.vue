<template>
  <div
    class="mx-10 lg:mx-24 lg:flex lg:justify-between lg:items-start lg:space-x-20"
  >
    <div class="lg:flex-[12]">
      <div class="lg:py-8">
        <h2 class="font-serif font-semibold text-4xl">NextJS</h2>
        <span class="text-lg mt-2.5 space-x-1 flex">
          <p>Created by</p>
          <p class="underline">Ryan Dahl</p></span
        >
      </div>
      <div class="mb-12 mt-8">
        <div class="hidden lg:block">
          <div class="object-cover w-full aspect-video">
            <nuxt-img
              class="w-full object-cover aspect-[16/10]"
              :src="'https://source.unsplash.com/random'"
            />
          </div>
          <div class="flex flex-row space-x-4 w-full mt-4">
            <div class="object-cover w-full aspect-video">
              <nuxt-img
                class="w-full object-cover aspect-[16/10]"
                :src="'https://source.unsplash.com/random'"
              />
            </div>
            <div class="object-cover w-full aspect-video">
              <nuxt-img
                class="w-full object-cover aspect-[16/10]"
                :src="'https://source.unsplash.com/random'"
              />
            </div>
            <div class="object-cover w-full aspect-video">
              <nuxt-img
                class="w-full object-cover aspect-[16/10]"
                :src="'https://source.unsplash.com/random'"
              />
            </div>
          </div>
        </div>
        <div class="lg:hidden">
          <carousel
            :paginationActiveColor="`#2547FA`"
            :paginationPadding="6"
            :paginationEnabled="true"
            :perPageCustom="[
              [320, 1],
              [768, 3],
              [1024, 4],
            ]"
          >
            <slide v-for="campaign in campaignThumbnails" :key="campaign">
              <div class="object-cover w-full aspect-video">
                <nuxt-img
                  class="w-full object-cover aspect-[16/10]"
                  :src="'https://source.unsplash.com/random'"
                />
              </div>
            </slide>
          </carousel>
        </div>
        <div class="px-0 lg:px-12">
          <section class="my-6">
            <h2 class="text-lg font-serif font-medium py-2">
              Crowdfunding progress
            </h2>
            <div class="w-full bg-gray-200 h-[6px]">
              <div
                class="bg-primary-orange h-[6px]"
                :style="{
                  width: calculateProgress(30, 36) + '%',
                }"
              ></div>
            </div>
            <div class="flex px-1 py-2 justify-between items-center text-sm">
              <p class="font-light">{{ calculateProgress(30, 36) }}%</p>
              <p>${{ 36 }}</p>
            </div>
          </section>
          <p class="prose mx-2 lg:mx-0">
            Nest (NestJS) is a framework for building efficient, scalable
            Node.js server-side applications. It uses progressive JavaScript, is
            built with and fully supports TypeScript (yet still enables
            developers to code in pure JavaScript) and combines elements of OOP
            (Object Oriented Programming), FP (Functional Programming), and FRP
            (Functional Reactive Programming). Under the hood, Nest makes use of
            robust HTTP Server frameworks like Express (the default) and
            optionally can be configured to use Fastify as well! Nest provides a
            level of abstraction above these common Node.js frameworks
            (Express/Fastify), but also exposes their APIs directly to the
            developer. This gives developers the freedom to use the myriad of
            third-party modules which are available for the underlying platform.
          </p>
        </div>
      </div>
    </div>
    <div class="p-8 bg-[#F6F8FC] w-full lg:flex-[5]">
      <h2 class="font-semibold text-3xl">$36</h2>
      <p class="text-md mt-2 space-x-1 flex">for the final goal</p>
      <div class="mt-8">
        <label
          class="block mb-2 text-sm font-medium text-gray-600"
          for="LoggingEmailAddress"
          >Fund this project</label
        >
        <input
          placeholder="Enter the amount ($)"
          class="block w-full px-4 py-3 text-gray-700 bg-white border outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="number"
        />
      </div>
      <div class="mt-4">
        <button
          class="w-full px-4 py-2.5 tracking-wide text-white transition-colors duration-200 transform bg-primary-blue focus:outline-none focus:bg-gray-600"
        >
          Fund this campaign!
        </button>
      </div>
      <div class="w-full h-[1px] mt-8 mb-4 bg-gray-200" />
      <h2 class="text-lg font-serif font-medium pt-2 pb-4">
        Crowdfunding progress
      </h2>
      <section class="flex flex-col space-y-4">
        <div class="flex space-x-4 justify-start items-start">
          <div class="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Checkmark Circle</title>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="#22C58B"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="#22C58B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 176L217.6 336 160 272"
              />
            </svg>
          </div>
          <p class="text-base">
            Credited on the Github Repository page of this framework
          </p>
        </div>
        <div class="flex space-x-4 justify-start items-start">
          <div class="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Checkmark Circle</title>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="#22C58B"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="#22C58B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 176L217.6 336 160 272"
              />
            </svg>
          </div>
          <p class="text-base">
            Credited on the Github Repository page of this framework
          </p>
        </div>
        <div class="flex space-x-4 justify-start items-start">
          <div class="h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Checkmark Circle</title>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="#22C58B"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="#22C58B"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M352 176L217.6 336 160 272"
              />
            </svg>
          </div>
          <p class="text-base">
            Credited on the Github Repository page of this framework
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import { Carousel, Slide } from 'vue-carousel'

export default defineComponent({
  setup() {
    const route = useRoute()
    const id = computed(() => route.value.params.id)

    const campaignThumbnails = ['a', 'b', 'c', 'd']
    const calculateProgress = (currentAmount, goalAmount) => {
      const raw = (currentAmount / goalAmount) * 100
      var result
      if (raw < 1) {
        result = raw.toFixed(2)
      } else {
        result = raw.toFixed(0)
      }
      return result
    }

    return { campaignThumbnails, calculateProgress }
  },
  head() {
    return {
      title: "TODO: Change Title",
      meta: [
        {
          hid: this.$route.params.id,
          name: 'TODO',
          content: 'TODO',
        },
      ],
    }
  },
  components: { Carousel, Slide },
})
</script>

<style></style>
