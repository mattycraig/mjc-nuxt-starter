<template>
  <header>
    <b-container fluid="lg" class="d-flex">
      <span>{{ siteName }}</span>
      <div class="ml-auto">
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/">Home</nuxt-link>
        <nuxt-link class="btn btn-sm btn-link mx-1" to="/about"
          >About</nuxt-link
        >
      </div>
    </b-container>
  </header>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  padding: $spacer 0;
}

.nuxt-link-exact-active {
  color: $secondary;
  font-weight: $font-weight-bold;
}
</style>
