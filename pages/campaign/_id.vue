<template>
  <div
    class="mx-10 lg:mx-24 lg:flex lg:justify-between lg:items-start lg:space-x-20"
  >
    <div class="lg:flex-[12]">
      <div class="lg:py-8">
        <h2 class="font-serif font-semibold text-4xl">
          {{ campaigns.data.name }}
        </h2>
        <div class="flex space-x-2.5 items-center mt-4">
          <div
            class="h-10 w-10 bg-gray-400 rounded-full object-cover overflow-hidden"
          >
            <nuxt-img
              class="object-cover"
              :src="
                $axios.defaults.baseURL + `/` + campaigns.data.user.image_url
              "
            />
          </div>
          <span class="flex space-x-1 text-base text-gray-600">
            <p class="text-gray-600">created by:</p>
            <p class="underline text-gray-600 hover:bg-primary-blue">
              {{ campaigns.data.user.name }}
            </p>
          </span>
        </div>
      </div>
      <div class="mb-12 mt-8">
        <div class="hidden lg:block">
          <div class="object-cover w-full aspect-video">
            <nuxt-img
              class="w-full object-cover aspect-[16/10]"
              :src="
                $axios.defaults.baseURL +
                `/` +
                (overrideThumbnail || primaryThumbnail[0].image_url)
              "
            />
          </div>
          <div class="grid grid-cols-4 grid-rows-1 gap-4 w-full mt-4">
            <div
              class="object-cover w-full aspect-video border border-gray-200 hover:border-gray-400 duration-200"
              v-for="thumbnail in campaigns.data.campaign_images"
              :key="thumbnail.image_url"
              @click="updateThumbnail(thumbnail.image_url)"
            >
              <nuxt-img
                class="w-full object-cover aspect-[16/10] hover:saturate-200 duration-200"
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
              v-for="thumbnail in campaigns.data.campaign_images"
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
                      campaigns.data.current_amount,
                      campaigns.data.goal_amount
                    ) + '%',
                }"
              ></div>
            </div>
            <div class="flex px-1 py-2 justify-between items-center text-sm">
              <p class="font-light">
                {{
                  calculateProgress(
                    campaigns.data.current_amount,
                    campaigns.data.goal_amount
                  )
                }}%
              </p>
              <p>
                {{
                  new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(campaigns.data.goal_amount)
                }}
              </p>
            </div>
          </section>
          <p class="prose mx-2 lg:mx-0">
            {{ campaigns.data.description }}
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
          }).format(campaigns.data.goal_amount)
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
          v-model.number="transactionModel.amount"
        />
      </div>
      <div class="mt-4">
        <button
          :disabled="transactionModel.amount == 0"
          @click="campaigns.data.goal_amount == campaigns.data.current_amount ? () => {} : fundCampaign"
          class="w-full px-4 py-2.5 tracking-wide text-white duration-200 disabled:cursor-not-allowed bg-primary-blue disabled:bg-opacity-50"
        >
          {{campaigns.data.goal_amount == campaigns.data.current_amount ? "This campaign is completed" : "Fund this campaign!"}}
        </button>
      </div>
      <div class="w-full h-[1px] mt-8 mb-4 bg-gray-200" />
      <h2 class="text-lg font-serif font-medium pt-2 pb-4">
        Crowdfunding progress
      </h2>
      <section class="flex flex-col space-y-4">
        <div
          class="flex space-x-4 justify-start items-center"
          v-for="perk in campaigns.data.perks"
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
import { ref } from '@vue/composition-api'

export default {
  async asyncData({ $axios, params }) {
    const campaigns = await $axios.$get('/api/v1/campaigns/' + params.id)
    const primaryThumbnail = campaigns.data.campaign_images.filter((img) => {
      return img.is_primary == true
    })

    return { campaigns, primaryThumbnail }
  },
  data() {
    return {
      transactionModel: {
        amount: 0,
        campaign_id: Number.parseInt(this.$route.params.id),
      },
    }
  },
  methods: {
    async fundCampaign() {
      if (this.$store.state.auth.user == null) {
        this.$router.push('/login')
      } else {
        try {
          let response = await this.$axios.post(
            'api/v1/transactions',
            this.transactionModel
          )
          console.log(response)

          window.location = response.data.data.payment_url
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
  setup() {
    const overrideThumbnail = ref('')
    const updateThumbnail = (link) => {
      overrideThumbnail.value = link
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

    return { overrideThumbnail, updateThumbnail, calculateProgress }
  },
  head() {
    return {
      title: this.campaigns.data.name + ' | Rocketship',
      meta: [
        {
          hid: this.$route.params.id,
          name: this.campaigns.data.name + ' | Rocketship',
          content: this.campaigns.data.short_description,
        },
      ],
    }
  },
  components: { Carousel, Slide },
}
</script>

<style></style>
