<template>
  <div class="mx-10 bg-white">
    <div class="w-full py-6 flex justify-between items-center">
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
      <div class="flex-5 ml-48 w-full">
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
    <div class="mt-[12rem]">
      <h2 class="px-4 pb-6 font-semibold text-3xl font-serif">
        Featured Campaigns
      </h2>
      <carousel
        :paginationEnabled="false"
        :navigationEnabled="true"
        :perPageCustom="[
          [768, 3],
          [1024, 4],
        ]"
      >
        <slide v-for="campaign in featuredCampaign" :key="campaign.id">
          <CampaignCard
            :campaign="campaign"
            :calculateProgress="calculateProgress"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'
import LandingHero from '~/components/LandingHero.vue'
import { Carousel, Slide } from 'vue-carousel'
import CampaignCard from '~/components/CampaignCard.vue'

export default defineComponent({
  setup() {
    const router = useRouter()
    const registerUser = () => {
      router.push('/register')
    }

    const videoIndex = ref(1)
    const registerVideoBlock = (index) => {
      videoIndex.value = index
    }

    const featuredCampaign = [
      {
        id: 1,
        title: 'NestJS',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 875,
        goalAmount: 3000,
      },
      {
        id: 2,
        title: 'NuxtJS',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 1,
        goalAmount: 3000,
      },
      {
        id: 3,
        title: 'MeteorJS',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 900,
        goalAmount: 8822,
      },
      {
        id: 4,
        title: 'PackMe',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 300,
        goalAmount: 7654,
      },
      {
        id: 5,
        title: 'CariTani',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 267,
        goalAmount: 3842,
      },
      {
        id: 6,
        title: 'Kedas',
        shortDescription:
          'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
        currentAmount: 12,
        goalAmount: 4567,
      },
    ]

    const calculateProgress = (currentAmount, goalAmount) => {
      const raw =  (currentAmount / goalAmount) * 100
      var result;
      if (raw < 1) {  
        result = raw.toFixed(2)
      } else {
        result = raw.toFixed(0)
      }
      return result
    }

    return {
      videoIndex,
      featuredCampaign,
      registerUser,
      registerVideoBlock,
      calculateProgress,
    }
  },
  components: { LandingHero, Carousel, Slide, CampaignCard },
})
</script>
