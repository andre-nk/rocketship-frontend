<template>
  <div class="mx-10 my-6">
    <h2 class="font-serif font-semibold text-4xl">Search all campaign:</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
      <div v-for="campaign in campaigns.data" :key="campaign.id">
        <CampaignCard
          :campaign="campaign"
          :calculateProgress="calculateProgress"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CampaignCard from '~/components/CampaignCard.vue'
export default {
  async asyncData({ $axios }) {
    var campaigns = await $axios.$get('/api/v1/campaigns')

    return { campaigns }
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

    return { calculateProgress }
  },
  head() {
    return {
      title: 'All Campaigns | Rocketship',
      meta: [
        {
          hid: 'all_campaign',
          name: 'All Campaign on Rocketship',
          content:
            'Discover and start funding these innovative campaigns only on Rocketship',
        },
      ],
    }
  },
  components: { CampaignCard },
}
</script>
