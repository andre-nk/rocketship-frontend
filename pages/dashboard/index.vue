<template>
  <div class="mx-10 my-6">
    <div class="flex flex-col">
      <div class="w-full flex justify-between items-center">
        <h2 class="font-serif font-semibold text-4xl">Dashboard</h2>
        <nuxt-link
          to="/dashboard/create"
          class="py-[10px] px-6 text-white bg-primary-blue"
        >
          Create Campaign
        </nuxt-link>
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
      <nuxt-link
        v-for="campaign in userCampaigns.data"
        :key="campaign.id"
        :to="`/dashboard/` + campaign.id"
      >
        <div
          class="w-full h-full p-3 pr-0 border-gray-300 border flex hover:bg-gray-100 duration-200"
        >
          <div class="object-cover w-full flex-[3]">
            <nuxt-img
              class="w-full object-cover lg:aspect-video"
              :src="$axios.defaults.baseURL + `/` + campaign.image_url"
            />
          </div>
          <div class="flex-[8] flex flex-col h-full justify-between py-2 px-6">
            <h2 class="text-lg font-medium">{{ campaign.name }}</h2>
            <div>
              <div class="w-full bg-gray-200 h-[6px]">
                <div
                  class="bg-primary-orange h-[6px]"
                  :style="{
                    width:
                      calculateProgress(
                        campaign.current_amount,
                        campaign.goal_amount
                      ) + '%',
                  }"
                ></div>
              </div>
              <div class="flex px-1 pt-2 justify-between items-center text-sm">
                <p class="font-light">
                  {{
                    calculateProgress(
                      campaign.current_amount,
                      campaign.goal_amount
                    )
                  }}%
                </p>
                <p>
                  {{
                    new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    }).format(campaign.goal_amount)
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </section>

    <section
      v-if="selectedTabs == 1"
      class="w-full flex flex-col space-y-10 mt-10"
    >
      <div
        v-for="transaction in userTransactions.data"
        :key="transaction.id"
        class="w-full h-full p-3 pr-0 border-gray-300 border flex hover:bg-gray-100 duration-200"
      >
        <div class="object-cover w-full flex-[1.5]">
          <nuxt-img
            class="w-full object-cover lg:aspect-video"
            :src="
              $axios.defaults.baseURL + `/` + transaction.campaign.image_url
            "
          />
        </div>
        <div
          class="flex-[11] flex flex-col justify-between max-h-full py-2 px-6"
        >
          <div class="flex justify-between">
            <h2 class="text-lg font-medium">{{ transaction.campaign.name }}</h2>
            <h2 class="text-lg font-medium">
              {{
                new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(transaction.amount)
              }}
            </h2>
          </div>
          <div class="flex justify-between">
            <span class="flex space-x-1 text-sm text-gray-600">
              <p class="text-gray-600">status:</p>
              <p
                class="underline capitalize"
                :class="
                  transaction.status == `pending`
                    ? `text-primary-orange`
                    : transaction.status == `paid`
                    ? `text-green-500`
                    : `text-red-400`
                "
              >
                {{ transaction.status }}
              </p>
            </span>
            <p class="text-sm text-gray-600">
              {{
                new Date(transaction.created_at).toLocaleDateString(
                  'en-US',
                  options
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  middleware: 'auth',
  async asyncData({ $axios, app }) {
    const userCampaigns = await $axios.$get(
      'api/v1/campaigns?user_id=' + app.$auth.user.id
    )
    const userTransactions = await $axios.$get('/api/v1/transactions')
    console.log(userTransactions)

    return { userCampaigns, userTransactions }
  },
  setup() {
    const selectedTabs = ref(0)

    const changeTab = (index) => {
      selectedTabs.value = index
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

    var options = { day: 'numeric', month: 'long', year: 'numeric' }

    return { calculateProgress, selectedTabs, options, changeTab }
  },
  head() {
    return {
      title: 'Dashboard | Rocketship',
      meta: [
        {
          hid: this.$route.params.id,
        },
      ],
    }
  },
}
</script>
