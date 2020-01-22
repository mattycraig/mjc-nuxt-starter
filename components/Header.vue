<template lang="pug">
  header
    span {{ siteName }}
    nuxt-link.btn.btn-sm.btn-link.mx-1.ml-auto(to='/').
      Homepage
    nuxt-link.btn.btn-sm.btn-link.mx-1(to='/about').
      About Page

</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      siteName: config.siteTitle
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: $spacer;
  background: $gray-200;
  display: flex;
  align-items: center;
}

.nuxt-link-exact-active {
  color: $secondary;
  font-weight: $font-weight-bold;
}
</style>
