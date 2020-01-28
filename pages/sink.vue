<template>
  <div>
    Bootstrap Kitchen Sink...
  </div>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      metaTitle: 'Bootstrap Kitchen Sink',
      metaDescription: 'This is the Bootstrap Kitchen Sink page.'
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 10px;
}
</style>
