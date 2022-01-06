<template>
  <div
    class="flex max-w-sm mx-auto my-4 overflow-hidden bg-white shadow-lg lg:max-w-4xl"
  >
    <div
      class="hidden bg-cover lg:block lg:w-1/2"
      style="background-image: url('/register.png')"
    ></div>

    <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
      <p class="text-xl text-center text-gray-600">Welcome to our community!</p>

      <div class="mt-8 mb-4">
        <div class="flex items-center justify-center w-full cursor-pointer">
          <div
            @click="$refs.file.click()"
            class="flex flex-col justify-center items-center group border-2 border-dashed w-full h-32 hover:bg-gray-100 hover:border-primary-blue hover:border-opacity-70 duration-200"
          >
            <div
              class="flex flex-col items-center space-y-2 justify-center text-gray-400 group-hover:text-primary-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 512 512"
              >
                <title>Images</title>
                <path
                  d="M432 112V96a48.14 48.14 0 00-48-48H64a48.14 48.14 0 00-48 48v256a48.14 48.14 0 0048 48h16"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <rect
                  x="96"
                  y="128"
                  width="400"
                  height="336"
                  rx="45.99"
                  ry="45.99"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <ellipse
                  cx="372.92"
                  cy="219.64"
                  rx="30.77"
                  ry="30.55"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
                <path
                  d="M342.15 372.17L255 285.78a30.93 30.93 0 00-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0141.46-1.87L496 402.91"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <p
                class="lowercase text-sm text-gray-400 group-hover:text-primary-blue pt-1 tracking-wider"
              >
                {{
                  avatarModel.selectedFiles != null
                    ? avatarModel.selectedFiles[0].name
                    : 'Pick your avatar'
                }}
              </p>
            </div>
            <input
              type="file"
              ref="file"
              accept="image/*"
              @change="onFileChange"
              class="hidden"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600"
          for="LoggingEmailAddress"
          >Your Name</label
        >
        <input
          v-model="registerModel.name"
          class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="text"
        />
      </div>

      <div class="mt-4">
        <label
          class="block mb-2 text-sm font-medium text-gray-600"
          for="LoggingEmailAddress"
          >Email Address</label
        >
        <input
          id="LoggingEmailAddress"
          v-model="registerModel.email"
          class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          type="email"
        />
      </div>

      <div class="mt-4">
        <div class="flex justify-between items-center">
          <label
            class="block mb-2 text-sm font-medium text-gray-600"
            for="loggingPassword"
            >Password</label
          >
          <a href="#" class="text-xs text-gray-500 hover:underline"
            >Forgot Password?</a
          >
        </div>

        <input
          id="loggingPassword"
          v-model="registerModel.password"
          @keyup.enter="register"
          class="block w-full px-4 py-2 text-gray-700 bg-white border outline-none focus:border-blue-500 focus:outline-none focus:ring"
          type="password"
        />
      </div>

      <div class="mt-8">
        <button
          @click="register"
          :disabled="avatarModel.selectedFiles == undefined"
          class="w-full px-4 py-3 tracking-wide text-white duration-200 bg-primary-blue disabled:bg-opacity-50"
        >
          Create your account
        </button>
      </div>

      <div class="flex items-center justify-between mt-8">
        <span class="w-1/5 border-b md:w-1/4"></span>

        <nuxt-link
          to="/register"
          class="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          OR LOG IN HERE!
        </nuxt-link>

        <span class="w-1/5 border-b md:w-1/4"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Register | Rocketship',
      meta: [
        {
          hid: 'register',
          name: 'Register account',
          content:
            'Create your Rocketship account and start funding a campaign',
        },
      ],
    }
  },
  data() {
    return {
      registerModel: {
        name: '',
        email: '',
        password: '',
      },
      avatarModel: {
        url: '/avatar.jpg',
        selectedFiles: undefined,
      },
    }
  },
  methods: {
    async register() {
      let formData = new FormData()
      formData.append('avatar', this.avatarModel.selectedFiles.item(0))

      try {
        let registerResponse = await this.$axios.post(
          '/api/v1/users',
          this.registerModel
        )
        console.log(registerResponse)

        let avatarResponse = await this.$axios.post(
          '/api/v1/avatars',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Authorization": 'Bearer ' + registerResponse.data.data.token,
            },
          }
        )
        console.log(avatarResponse)

        this.$auth.setUserToken(registerResponse.data.data.token).then(() => {
          this.$router.push('/')
        })

        this.uploadAvatar(response)
      } catch (e) {
        console.log(e)
      }
    },
    onFileChange(e) {
      const file = e.target.files[0]
      this.avatarModel.url = URL.createObjectURL(file)
      this.avatarModel.selectedFiles = this.$refs.file.files

      console.log(this.avatarModel.url)
      console.log(this.avatarModel.selectedFiles)
    },
  },
}
</script>

<style></style>
