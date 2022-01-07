<template>
  <div class="mx-10 my-6">
    <div class="w-full flex justify-end space-x-4 items-center">
      <nuxt-link
        :to="`/campaign/` + campaign.data.id"
        class="py-[10px] px-6 text-primary-blue bg-white hover:bg-secondary-blue border border-primary-blue duration-200"
      >
        Visit campaign
      </nuxt-link>
      <nuxt-link
        :to="`/dashboard/` + campaign.data.id + '/edit'"
        class="py-[10px] px-6 text-white bg-primary-blue"
      >
        Edit
      </nuxt-link>
    </div>
    <div class="flex space-x-8 max-h-full">
      <div class="flex my-12 flex-[8] overflow-hidden bg-white shadow-lg">
        <div class="w-full flex-[8] px-6 py-12 md:px-8 flex flex-col space-y-6">
          <div class="px-0 lg:px-12">
            <h2 class="font-serif font-semibold text-4xl">
              {{ campaign.data.name }}
            </h2>
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
            <section class="flex flex-col space-y-3 my-6">
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

          <div class="grid grid-cols-4 grid-rows-1 gap-4">
            <div
              v-for="image in campaign.data.campaign_images"
              :key="image.image_url"
            >
              <div class="object-cover w-full aspect-video">
                <nuxt-img
                  class="w-full object-cover aspect-[16/10]"
                  :src="$axios.defaults.baseURL + `/` + image.image_url"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col flex-[4] w-full h-[100vh] my-12 overflow-y-auto px-6 py-8 md:px-8 bg-white shadow-lg"
      >
        <h2 class="font-serif text-2xl mb-4 font-semibold">
          Campaign's transaction history
        </h2>
        <div class="flex flex-col space-y-4">
          <div
            v-for="transaction in campaignTransaction.data"
            :key="transaction.id"
            class="w-full p-4 border border-gray-400 flex justify-between items-start"
          >
            <div
              class="flex flex-col space-y-3 h-full justify-between items-start"
            >
              <h2 class="text-lg font-medium">{{ transaction.name }}</h2>
              <p class="text-sm text-gray-400">
                {{
                  new Date(transaction.created_at).toLocaleDateString(
                    'en-US',
                    options
                  )
                }}
              </p>
            </div>
            <h2 class="text-lg font-medium">
              {{
                Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(transaction.amount)
              }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const campaign = await $axios.$get('/api/v1/campaigns/' + params.id)
    const campaignTransaction = await $axios.$get(
      '/api/v1/campaigns/' + params.id + '/transactions'
    )

    console.log(campaign)
    console.log(campaignTransaction)

    return {
      campaign,
      campaignTransaction,
    }
  },
  setup() {
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

    var options = { day: 'numeric', month: 'long', year: 'numeric', hour:'numeric', minute:'numeric' }

    return { calculateProgress, options }
  },
  head() {
    return {
      title: this.campaign.data.name + ' | Rocketship',
      meta: [
        {
          hid: this.$route.params.id,
        },
      ],
    }
  },
}
</script>
