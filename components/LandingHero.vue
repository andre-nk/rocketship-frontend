<template>
  <div
    :class="props.videoIndex == props.currentIndex ? 'flex-[5]' : 'flex-[2]'"
    class="h-[32rem] bg-gray-200 duration-300 ease-in-out relative"
    @mouseenter="props.registerVideoBlock(props.currentIndex)"
  >
    <div
      class="flex flex-col space-y-1 bottom-0 absolute px-[1.75rem] py-[1.75rem]"
    >
      <h2
        class="text-white font-serif text-2xl font-semibold opacity-100 duration-500 ease-in-out"
        :class="props.videoIndex != props.currentIndex && `opacity-0`"
      >
        {{props.title}}
      </h2>
      <p
        class="text-white text-lg font-light opacity-100 duration-500 ease-in-out"
        :class="videoIndex != props.currentIndex && `opacity-0`"
      >
        {{props.projectCount}} projects
      </p>
    </div>
    <div class="h-full">
      <nuxt-img
        class="h-full object-cover"
        :src="props.imageURL"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingHero',
  props: {
    imageURL: {
      type: String,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true
    },
    videoIndex: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    projectCount: {
      type: Number,
      required: true,
    },
    registerVideoBlock: {
      type: Function,
      required: true,
    }
  },
  setup(props){
      return { props }
  }
}
</script>
