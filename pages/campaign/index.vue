<template>
  <div class="mx-10 my-6">
    <h2 class="font-serif font-semibold text-4xl">Search all campaign:</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
      <div v-for="campaign in featuredCampaign" :key="campaign.id">
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
  setup() {
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
      const raw = (currentAmount / goalAmount) * 100
      var result
      if (raw < 1) {
        result = raw.toFixed(2)
      } else {
        result = raw.toFixed(0)
      }
      return result
    }

    return { featuredCampaign, calculateProgress }
  },
  head() {
    return {
      title: 'All Campaigns | Rocketship',
      meta: [
        {
          hid: "all_campaign",
          name: 'All Campaign on Rocketship',
          content: 'Discover and start funding these innovative campaigns only on Rocketship',
        },
      ],
    }
  },
  components: { CampaignCard },
}
</script>
