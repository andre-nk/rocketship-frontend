<template>
  <div class="mx-10 bg-white flex flex-col justify-center">
    <div class="w-full pt-10 lg:py-6 flex justify-between items-center">
      <div
        class="flex flex-5 flex-col justify-center items-start space-y-[50px]"
      >
        <div class="space-y-[18px]">
          <h2 class="font-serif text-5xl font-medium leading-snug">
            Fund their project, and join the ride!
          </h2>
          <p class="text-xl leading-relaxed">
            We provide a solid and trusted platform to financially back
            innovative minds!
          </p>
        </div>
        <button
          class="py-3 px-6 text-lg text-white bg-primary-blue"
          @click="registerUser"
        >
          Start funding!
        </button>
      </div>
      <div class="flex-5 ml-48 w-full hidden lg:flex">
        <div class="flex space-x-8 w-full">
          <LandingHero
            :imageURL="'https://source.unsplash.com/random/800x600'"
            :videoIndex="videoIndex"
            :currentIndex="1"
            :title="'Open Source Projects'"
            :projectCount="572"
            :registerVideoBlock="registerVideoBlock"
          />
          <LandingHero
            :imageURL="'https://source.unsplash.com/random/800x600'"
            :videoIndex="videoIndex"
            :currentIndex="2"
            :title="'Technology'"
            :projectCount="572"
            :registerVideoBlock="registerVideoBlock"
          />
          <LandingHero
            :imageURL="'https://source.unsplash.com/random/800x600'"
            :videoIndex="videoIndex"
            :currentIndex="3"
            :title="'Humanity'"
            :projectCount="572"
            :registerVideoBlock="registerVideoBlock"
          />
        </div>
      </div>
    </div>
    <div class="mt-[10rem] lg:mt-[12rem]">
      <h2 class="lg:px-4 pb-8 font-semibold text-3xl font-serif">
        Featured Campaigns
      </h2>
      <carousel
        :paginationEnabled="false"
        :navigationEnabled="true"
        :perPageCustom="[
          [320, 1],
          [768, 3],
          [1024, 4],
        ]"
      >
        <slide v-for="campaign in featuredCampaign" :key="campaign.id">
          <div class="mx-4">
            <CampaignCard
              :campaign="campaign"
              :calculateProgress="calculateProgress"
            />
          </div>
        </slide>
      </carousel>
    </div>
    <section class="text-gray-600 body-font mt-[4rem] self-center">
      <div class="container px-5 py-24 mx-auto flex lg:space-x-32 flex-wrap">
        <div class="lg:w-4/12 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <nuxt-img
            alt="feature"
            src="/features.svg"
            class="object-contain object-center h-full w-full cursor-pointer"
          />
        </div>
        <div
          class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
        >
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="w-12 h-12 p-2.5 inline-flex items-center justify-center rounded-full bg-secondary-blue text-primary-blue mb-5"
            >
              <nuxt-img src="/flash-outline.svg" class="cursor-pointer" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Speedy Payout
              </h2>
              <p class="leading-relaxed text-base">
                Rocketship provide a easy to use and fast service for campaign
                funder <br />
                and a quick payout for the campaign owner
              </p>
              <a class="mt-3 text-primary-blue inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="w-12 h-12 p-2.5 inline-flex items-center justify-center rounded-full bg-secondary-blue text-primary-blue mb-5"
            >
              <nuxt-img src="/flash-outline.svg" class="cursor-pointer" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Low Admin Fee
              </h2>
              <p class="leading-relaxed text-base">
                We try our best to deliver the highest rate for campaign owner
                and also perks for the funder
              </p>
              <a class="mt-3 text-primary-blue inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div
              class="w-12 h-12 p-2.5 inline-flex items-center justify-center rounded-full bg-secondary-blue text-primary-blue mb-5"
            >
              <nuxt-img src="/people-outline.svg" class="cursor-pointer" />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Trusted Community
              </h2>
              <p class="leading-relaxed text-base">
                Rocketship guarantees a real and trusted community all around
                the world, starting from the funder and the innovative mind
                behind every campaign
              </p>
              <a class="mt-3 text-primary-blue inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="inline-block w-8 h-8 text-primary-orange mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
            ></path>
          </svg>
          <p class="leading-relaxed text-lg">
            Rocketship is the absolute bomb in the world of crowdfunding or
            fundraising! My partner and myself was a college student when we
            develop PackMe which aimed to be a great apps and business model.
            Rocketship helps us to discover a heartwarming community of
            wonderful and innovative people, willing to support the best out of
            us.
          </p>
          <span
            class="inline-block h-1 w-10 rounded bg-secondary-blue mt-8 mb-6"
          ></span>
          <h2
            class="text-gray-900 font-medium title-font tracking-wider text-sm"
          >
            RAFFLI AFFANDI
          </h2>
          <p class="text-gray-500">CO-FOUNDER AT PACKME</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
import { Carousel, Slide } from 'vue-carousel'

import LandingHero from '~/components/LandingHero.vue'
import CampaignCard from '~/components/CampaignCard.vue'

export default defineComponent({
  async asyncData({ $axios }){
    var featuredCampaign = await $axios.$get('/api/v1/campaigns')
    featuredCampaign = featuredCampaign.data

    return { featuredCampaign }
  },  
  setup() {
    const router = useRouter()

    const registerUser = () => {
      router.push('/register')
    }

    const videoIndex = ref(1)
    const registerVideoBlock = (index) => {
      videoIndex.value = index
    }

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

    return {
      videoIndex,
      registerUser,
      registerVideoBlock,
      calculateProgress,
    }
  },
  head() {
    return {
      title: 'Home | Rocketship',
      meta: [
        {
          hid: "home",
          name: 'Homepage',
          content: 'Discover and fund bunch of innovative minds with their campaign only on Rocketship',
        },
      ],
    }
  },
  components: { LandingHero, Carousel, Slide, CampaignCard },
})
</script>
