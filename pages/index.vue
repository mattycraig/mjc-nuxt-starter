<template>
  <div>
    <div class="intro">
      <Logo />
      <h1 class="title">Homepage</h1>
      <h2 class="subtitle">This is the homepage.</h2>
      <div class="links">
        <nuxt-link class="btn btn-primary mx-1" to="/">Home</nuxt-link>
        <nuxt-link class="btn btn-secondary mx-1" to="/about">About</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import config from '~/data/siteConfig'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      metaTitle: 'Homepage',
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
      ],
    }
  },
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
