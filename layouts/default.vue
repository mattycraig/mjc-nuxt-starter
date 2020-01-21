<template lang="pug">
  div.layout.layout--default

    Header

    b-container
      nuxt

    Footer

</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
