<template lang="pug">
  div
    .intro
      Logo
      h1.title.
        About Page

      h2.subtitle.
        This is the about us page.

      .links
        nuxt-link.btn.btn-primary.mx-1(to='/').
          Homepage
        nuxt-link.btn.btn-secondary.mx-1(to='/about').
          About Page

    div.pb-5
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.
      p.
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea nostrud aliquip consequat.

</template>

<script>
import config from '~/data/siteConfig'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      metaTitle: 'About',
      metaDescription: 'This is the about us page.'
      // metaImage: '/icon_about.png'
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
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.metaImage
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.metaImage
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
