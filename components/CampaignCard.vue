<template>
  <div
    class="flex flex-col mx-6 lg:mx-4 mb-3.5 hover:bg-black hover:bg-opacity-5 duration-200 cursor-pointer"
  >
    <div class="object-cover w-full aspect-video">
      <nuxt-img
        class="w-full object-cover aspect-[16/10]"
        :src="'https://source.unsplash.com/random'"
      />
    </div>
    <div class="p-4 pt-[18px] select-none">
      <div class="mb-4">
        <h2 class="font-serif text-xl font-medium mb-1">
          {{ props.campaign.title }}
        </h2>
        <p class="text-sm font-light">
          {{ props.campaign.shortDescription }}
        </p>
      </div>
      <div class="w-full bg-gray-200 h-[6px]">
        <div
          class="bg-primary-orange h-[6px]"
          :style="{
            width:
              props.calculateProgress(props.campaign.currentAmount, props.campaign.goalAmount) +
              '%',
          }"
        ></div>
      </div>
      <div class="flex px-1 py-2 justify-between items-center text-sm">
        <p class="font-light">
          {{ props.calculateProgress(props.campaign.currentAmount, props.campaign.goalAmount) }}%
        </p>
        <p>${{ props.campaign.goalAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'props.campaignCard',
  props: {
    campaign: {
      required: true,
    },
    calculateProgress: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return { props }
  },
}
</script>
