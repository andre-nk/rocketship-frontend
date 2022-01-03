<template>
  <div class="mx-10 my-6">
    <div class="flex flex-col">
      <div class="w-full flex justify-between items-center">
        <h2 class="font-serif font-semibold text-4xl">Dashboard</h2>
        <button class="py-[10px] px-6 text-white bg-primary-blue">
          Create Campaign
        </button>
      </div>
      <div class="flex items-center space-x-8 mt-6 lg:mt-3 flex-nowrap">
        <button
          @click="changeTab(0)"
          class="flex items-center flex-shrink-0 px-1 py-2 border-b-4"
          :class="selectedTabs == 0 && `border-primary-orange`"
        >
          Campaigns
        </button>
        <button
          @click="changeTab(1)"
          class="flex items-center flex-shrink-0 px-1 py-2 border-b-4"
          :class="selectedTabs == 1 && `border-primary-orange`"
        >
          Transactions
        </button>
      </div>
    </div>

    <section
      v-if="selectedTabs == 0"
      class="w-full grid lg:grid-cols-2 gap-10 mt-10"
    >
      <div
        v-for="campaign in campaignThumbnails"
        :key="campaign.id"
        class="w-full p-3 pr-0 border-gray-300 border flex hover:bg-gray-100 duration-200"
      >
        <div class="object-cover w-full flex-[3]">
          <nuxt-img
            class="w-full object-cover lg:aspect-video"
            :src="'https://source.unsplash.com/random'"
          />
        </div>
        <div class="flex-[8] flex flex-col h-full justify-between py-2 px-6">
          <h2 class="text-lg font-medium">Jang Hyun</h2>
          <div>
            <div class="w-full bg-gray-200 h-[6px]">
              <div
                class="bg-primary-orange h-[6px]"
                :style="{
                  width: calculateProgress(30, 36) + '%',
                }"
              ></div>
            </div>
            <div class="flex px-1 pt-2 justify-between items-center text-sm">
              <p class="font-light">{{ calculateProgress(30, 36) }}%</p>
              <p>${{ 36 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="selectedTabs == 1"
      class="w-full flex flex-col space-y-10 mt-10"
    >
      <div
        v-for="campaign in campaignThumbnails"
        :key="campaign.id"
        class="w-full h-full p-3 pr-0 border-gray-300 border flex hover:bg-gray-100 duration-200"
      >
        <div class="object-cover w-full flex-[1.5]">
          <nuxt-img
            class="w-full object-cover lg:aspect-video"
            :src="'https://source.unsplash.com/random'"
          />
        </div>
        <div
          class="flex-[11] flex flex-col justify-between max-h-full py-2 px-6"
        >
          <div class="flex justify-between">
            <h2 class="text-lg font-medium">Jang Hyun</h2>
            <h2 class="text-lg font-medium">Rp150,000</h2>
          </div>
          <div class="flex justify-between">
            <div class="flex space-x-4 items-center">
              <div class="h-6 w-6 bg-gray-400 rounded-full" />
              <span class="flex space-x-1 text-sm text-gray-600">
                <p class="text-gray-600">funded by:</p>
                <p class="underline text-gray-600 hover:bg-primary-blue">Kim Gimyung</p>
              </span>
            </div>
            <p class="text-sm text-gray-600">2 days ago</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const selectedTabs = ref(0)

    const changeTab = (index) => {
      selectedTabs.value = index
    }

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

    return { campaignThumbnails, calculateProgress, selectedTabs, changeTab }
  },
}
</script>
