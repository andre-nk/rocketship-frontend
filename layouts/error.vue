<template>
  <section class="flex items-center h-full p-16 w-full">
    <div class="container flex flex-col items-center justify-center px-5 my-8">
      <div class="text-center">
        <h2 class="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
          <span class="sr-only">Error</span>404
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">
          Sorry, we couldn't find this page.
        </p>
        <p class="mt-2.5 mb-16 text-xl">
          But dont worry, you can find plenty of other things on Rocketship.
        </p>
        <div class="mt-8">
          <nuxt-link
            to="/"
            class="px-8 py-4 mt-8 font-medium text-lg bg-primary-blue text-white"
          >
            Back to homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
