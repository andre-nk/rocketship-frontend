<template>
  <div class="mx-10 bg-white">
    <div class="w-full pb-8 pt-4 flex justify-between items-center">
      <div
        class="flex flex-5 flex-col justify-center items-start space-y-[50px]"
      >
        <div class="space-y-[18px]">
          <h2 class="font-serif text-5xl font-medium leading-snug">
            Fund their project, and join the ride!
          </h2>
          <p class="text-xl leading-relaxed">
            We provide a solid and trusted platform to financially back
            innovative minds!
          </p>
        </div>
        <button
          class="py-3 px-6 text-lg text-white bg-primary-blue"
          @click="registerUser"
        >
          Start funding!
        </button>
      </div>
      <div class="flex-5 ml-48 w-full">
        <div class="flex space-x-8 w-full">
          <div
            :class="
              videoIndex == 1
                ? 'h-[32rem] bg-gray-200 flex-[5] duration-300'
                : 'h-[32rem] bg-gray-200 flex-[2] duration-300'
            "
            @mouseenter="registerVideoBlock(1)"
          >
            <p>Projects</p>
          </div>
          <div
            :class="
              videoIndex == 2
                ? 'h-[32rem] bg-gray-200 flex-[5] duration-300'
                : 'h-[32rem] bg-gray-200 flex-[2] duration-300'
            "
            @mouseenter="registerVideoBlock(2)"
          >
            <p>Projects</p>
          </div>
          <div
            :class="
              videoIndex == 3
                ? 'h-[32rem] bg-gray-200 flex-[5] duration-300'
                : 'h-[32rem] bg-gray-200 flex-[2] duration-300'
            "
            @mouseenter="registerVideoBlock(3)"
          >
            <p>Projects</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex space-x-12">
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const videoIndex = ref(1)
    const router = useRouter()

    const registerVideoBlock = (index) => {
      videoIndex.value = index
    }

    const registerUser = () => {
      router.push('/register')
    }

    return { videoIndex, registerUser, registerVideoBlock }
  },
})
</script>
