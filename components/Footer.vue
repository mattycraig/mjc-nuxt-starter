<template lang="pug">
  footer
    span &copy; {{ new Date().getFullYear() }} {{ siteName }}
    font-awesome-icon.mx-1.ml-auto(:icon="['fab', 'facebook']")
    font-awesome-icon.mx-1(:icon="['fab', 'twitter']")
    font-awesome-icon.mx-1(:icon="['fab', 'github']")
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
footer {
  background: $gray-900;
  padding: $spacer;
  color: $white;
  display: flex;
}
</style>
