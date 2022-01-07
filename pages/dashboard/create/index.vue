<template>
  <div class="mx-10 my-6">
    <div class="w-full flex justify-between items-center">
      <h2 class="font-serif font-semibold text-4xl">Create a campaign</h2>
      <button
        @click="createCampaign"
        class="py-[10px] px-6 text-white bg-primary-blue"
      >
        Save
      </button>
    </div>
    <div
      class="flex max-w-sm mx-auto my-12 overflow-hidden bg-white shadow-lg lg:max-w-4xl"
    >
      <div class="w-full px-6 py-8 md:px-8 flex flex-col space-y-6">
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="campaignName"
            >Campaign Name</label
          >
          <input
            id="campaignName"
            v-model="campaign.name"
            placeholder="Ex: FakerJS"
            class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="text"
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="shortDescription"
            >Short Description</label
          >

          <textarea
            id="shortDescription"
            v-model="campaign.short_description"
            placeholder="Ex: FakerJS is a essential library for creating a swift mock data for your project"
            class="block w-full p-4 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring resize-none"
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="description"
            >Description</label
          >

          <textarea
            rows="7"
            id="description"
            v-model="campaign.description"
            placeholder="Ex: FakerJS is a essential library for creating a swift mock data for your project"
            class="block w-full p-4 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring resize-none"
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="perks"
            >What will your funders get?</label
          >

          <textarea
            id="perks"
            v-model="campaign.perks"
            placeholder="Ex: FakerJS will credit all financial contributors in the framework license and Github README.md"
            class="block w-full p-4 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring resize-none"
          />
        </div>

        <div class="w-5/12">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-600"
              for="campaign_goal"
              >Campaign goal</label
            >

            <div class="flex space-x-2.5 items-center">
              <p>Rp</p>
              <input
                id="campaign_goal"
                type="number"
                placeholder="Ex: 100000"
                v-model.number="campaign.goal_amount"
                class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data(){
    return {
      campaign: {
        name: "",
        short_description: "",
        description: "",
        goal_amount: 0,
        perks: ""
      }
    }
  },
  methods: {
    async createCampaign(){
      try {
        let response = await this.$axios.$post("api/v1/campaigns", this.campaign);
        console.log(response);

        this.$router.push("/dashboard/" + response.data.id)
      } catch (error) {
        console.log(error)
      }
    }
  },
  head() {
    return {
      title: "Create Campaign | Rocketship",
      meta: [
        {
          hid: this.$route.params.id,
        },
      ],
    }
  },
}
</script>
