<template lang="pug">
  .intro
    h1.title Error {{statusCode}}
    h2.subtitle.
      {{ message }}
    div(v-if='statusCode === 404')
      .links
        nuxt-link.btn.btn-primary(to='/').
          Return Home


</template>

<script>
import config from '~/data/siteConfig'

export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    }
  },
  layout: 'default',
  head() {
    return {
      title: `Error ${this.error.statusCode}`,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `Error ${this.error.statusCode} - ${config.siteTitle}`
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Error ${this.error.statusCode} - ${config.siteTitle}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: $spacer * 5 0;
}

.title {
  display: block;
  font-size: 100px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
