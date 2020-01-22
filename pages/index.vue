<template lang="pug">
  div
    .intro
      Logo
      h1.title.
        Homepage

      h2.subtitle.
        This is the homepage.

      .links
        nuxt-link.btn.btn-primary.mx-1(to='/').
          Homepage
        nuxt-link.btn.btn-secondary.mx-1(to='/about').
          About Page

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
      metaTitle: 'Homepage'
      // metaDescription: 'My_custom_description'
      // metaImage: 'icon.png'
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
        // {
        //   hid: 'twitter:image',
        //   name: 'twitter:image',
        //   content: `${config.siteUrl}/${this.metaImage}`
        // },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: `${config.siteUrl}/${this.metaImage}`
        // }
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
