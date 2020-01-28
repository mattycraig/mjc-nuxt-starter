<template>
  <footer>
    <b-container fluid="lg" class="d-flex">
      <span>&copy; {{ new Date().getFullYear() }} {{ siteName }}</span
      ><span class="ml-auto"
        ><a href="#"
          ><font-awesome-icon
            class="mx-1"
            :icon="['fab', 'facebook']"
          ></font-awesome-icon></a
        ><a href="#"
          ><font-awesome-icon
            class="mx-1"
            :icon="['fab', 'twitter']"
          ></font-awesome-icon></a
        ><a href="#"
          ><font-awesome-icon
            class="mx-1"
            :icon="['fab', 'github']"
          ></font-awesome-icon></a
      ></span>
    </b-container>
  </footer>
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
  color: $white;
  display: flex;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  padding: $spacer;
}
</style>
