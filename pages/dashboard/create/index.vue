<template>
  <div class="mx-10 my-6">
    <div class="w-full flex justify-between items-center">
      <h2 class="font-serif font-semibold text-4xl">Create a campaign</h2>
      <nuxt-link
        to="/dashboard/create"
        class="py-[10px] px-6 text-white bg-primary-blue"
      >
        Save
      </nuxt-link>
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
export default {}
</script>
