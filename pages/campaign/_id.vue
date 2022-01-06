<template>
  <div
    class="mx-10 lg:mx-24 lg:flex lg:justify-between lg:items-start lg:space-x-20"
  >
    <div class="lg:flex-[12]">
      <div class="lg:py-8">
        <h2 class="font-serif font-semibold text-4xl">
          {{ campaign.data.name }}
        </h2>
      </div>
      <div class="mb-12 mt-8">
        <div class="hidden lg:block">
          <div class="object-cover w-full aspect-video">
            <nuxt-img
              class="w-full object-cover aspect-[16/10]"
              :src="
                $axios.defaults.baseURL + `/` + primaryThumbnail[0].image_url
              "
            />
          </div>
          <div class="grid grid-cols-4 grid-rows-1 gap-4 w-full mt-4">
            <div
              class="object-cover w-full aspect-video"
              v-for="thumbnail in nonPrimaryThumbnails"
              :key="thumbnail.image_url"
            >
              <nuxt-img
                class="w-full object-cover aspect-[16/10]"
                :src="$axios.defaults.baseURL + `/` + thumbnail.image_url"
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
            <slide
              v-for="thumbnail in campaign.data.campaign_images"
              :key="thumbnail.image_url"
            >
              <div class="object-cover w-full aspect-video">
                <nuxt-img
                  class="w-full object-cover aspect-[16/10]"
                  :src="$axios.defaults.baseURL + `/` + thumbnail.image_url"
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
                  width:
                    calculateProgress(
                      campaign.data.current_amount,
                      campaign.data.goal_amount
                    ) + '%',
                }"
              ></div>
            </div>
            <div class="flex px-1 py-2 justify-between items-center text-sm">
              <p class="font-light">
                {{
                  calculateProgress(
                    campaign.data.current_amount,
                    campaign.data.goal_amount
                  )
                }}%
              </p>
              <p>
                {{
                  new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(campaign.data.goal_amount)
                }}
              </p>
            </div>
          </section>
          <p class="prose mx-2 lg:mx-0">
            {{ campaign.data.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="p-8 bg-[#F6F8FC] w-full lg:flex-[5]">
      <h2 class="font-semibold text-3xl">
        {{
          new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
          }).format(campaign.data.goal_amount)
        }}
      </h2>
      <p class="text-md mt-2 space-x-1 flex">for the final goal</p>
      <div class="mt-8">
        <label
          class="block mb-2 text-sm font-medium text-gray-600"
          for="LoggingEmailAddress"
          >Fund this project</label
        >
        <input
          placeholder="Enter the amount (Rp)"
          class="block w-full px-4 py-3 text-gray-700 bg-white border outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="number"
        />
      </div>
      <div class="mt-4">
        <button
          :disabled="this.$store.state.auth.user != null"
          class="w-full px-4 py-2.5 tracking-wide text-white transition-colors duration-200 transform cursor-not-allowed bg-primary-blue disabled:bg-opacity-50"
        >
          Fund this campaign!
        </button>
      </div>
      <div class="w-full h-[1px] mt-8 mb-4 bg-gray-200" />
      <h2 class="text-lg font-serif font-medium pt-2 pb-4">
        Crowdfunding progress
      </h2>
      <section class="flex flex-col space-y-4">
        <div
          class="flex space-x-4 justify-start items-center"
          v-for="perk in campaign.data.perks"
          :key="perk"
        >
          <div class="h-6 w-6">
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
            {{ perk }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  async asyncData({ $axios, params }) {
    const campaign = await $axios.$get('/api/v1/campaigns/' + params.id)
    const primaryThumbnail = campaign.data.campaign_images.filter((img) => {
      return img.is_primary == true
    })
    const nonPrimaryThumbnails = campaign.data.campaign_images.filter((img) => {
      return img.is_primary != true
    })

    return { campaign, primaryThumbnail, nonPrimaryThumbnails }
  },
  setup() {
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
      title: this.campaign.data.name + ' | Rocketship',
      meta: [
        {
          hid: this.$route.params.id,
          name: this.campaign.data.name + ' | Rocketship',
          content: this.campaign.data.short_description,
        },
      ],
    }
  },
  components: { Carousel, Slide },
}
</script>

<style></style>
