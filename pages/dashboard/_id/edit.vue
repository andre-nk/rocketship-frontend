<template>
  <div class="mx-10 my-6">
    <div class="w-full flex justify-end space-x-4 items-center">
      <!-- <nuxt-link
        :to="`/campaign/` + campaign.data.id"
        class="py-[10px] px-6 text-primary-blue bg-white hover:bg-secondary-blue border border-primary-blue duration-200"
      >
        Cancel
      </nuxt-link> -->
      <button
        @click="updateCampaign"
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
            v-model="campaign.data.name"
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
            v-model="campaign.data.short_description"
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
            v-model="campaign.data.description"
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
            v-model="campaign.data.perks"
            class="block w-full p-4 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring resize-none"
          />
        </div>

        <div class="w-5/12">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-600"
              for="perks"
              >Campaign goal</label
            >

            <div class="flex space-x-2.5 items-center">
              <p>Rp</p>
              <input
                id="perks"
                type="number"
                v-model.number="campaign.data.goal_amount"
                class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col pt-4 space-y-2.5">
          <div class="flex w-full justify-between items-center pb-4">
            <p>Campaign images</p>
            <div>
              <input
                type="file"
                ref="file"
                accept="image/*"
                @change="selectFile"
                class="border p-1 rounded overflow-hidden hidden"
              />
              <p
                @click="$refs.file.click()"
                class="hover:text-primary-blue underline duration-200"
              >
                Upload a new image
              </p>
            </div>
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
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, params }) {
    const campaign = await $axios.$get('/api/v1/campaigns/' + params.id)
    return { campaign }
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files
      this.uploadImage()
    },
    async uploadImage() {
      let formData = new FormData()

      formData.append('campaign_id', this.$route.params.id)
      formData.append('file', this.selectedFiles[0])
      formData.append('is_primary', true)

      try {
        let response = await this.$axios.post(
          'api/v1/campaign-images',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
    async updateCampaign() {
      try {
        let response = await this.$axios.$put(
          'api/v1/campaigns/' + this.$route.params.id,
          {
            name: this.campaign.data.name,
            short_description: this.campaign.data.short_description,
            description: this.campaign.data.description,
            goal_amount: this.campaign.data.goal_amount,
            perks: this.campaign.data.perks.toString(),
          }
        )
        console.log(response)

        this.$router.push('/dashboard/' + response.data.id)
      } catch (error) {
        console.log(error)
      }
    },
  },
  data() {
    return {
      selectedFiles: undefined,
    }
  },
  setup() {},
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
