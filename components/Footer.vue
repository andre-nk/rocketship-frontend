<template>
  <footer class="py-[2rem]">
    <div
      class="flex flex-wrap items-center mx-10 space-y-4 justify-between sm:space-y-0"
    >
      <div class="flex flex-row pr-3 space-x-4 sm:space-x-8">
        <nuxt-link to="/">
          <nuxt-img src="/logo_wide.svg" />
        </nuxt-link>
        <ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>
      <ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>
