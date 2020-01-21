<template lang="pug">
  .logo
    img(src="~/assets/images/logo.png" :srcset="require('~/assets/images/logo.png').srcSet" alt='SiteLogo')
</template>

<style lang="scss" scoped>
img {
  width: 100px;
}
</style>
