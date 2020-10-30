<template>
  <div>
    <div class="intro">
      <Logo />
      <h1 class="title">About Page</h1>
      <h2 class="subtitle">This is the about us page.</h2>
    </div>
    <div class="pb-5">
      <p>
        Ullamco sunt eu veniam tempor nostrud. Dolor incididunt labore ullamco
        reprehenderit esse magna qui. Nisi exercitation voluptate ipsum ea
        nostrud aliquip consequat.
      </p>
      <p>
        Minim sunt in est dolore aliquip in dolore commodo velit laborum qui qui
        aute. Sunt amet adipisicing anim excepteur fugiat pariatur tempor. Ad
        enim voluptate laboris enim ullamco duis incididunt deserunt mollit.
        Officia laboris non voluptate tempor anim do ut Lorem id proident Lorem
        eiusmod magna aliquip. Irure officia dolore culpa minim in.
      </p>
      <p>
        Qui dolor est quis est adipisicing sit. Eiusmod id est commodo ex ipsum
        consequat amet irure fugiat ipsum esse aliqua officia. Incididunt do
        dolore adipisicing eu commodo. Nulla qui magna Lorem fugiat ullamco
        dolor. Cupidatat labore anim non mollit laborum do elit cupidatat labore
        id ea proident. Non sit aute enim pariatur in cillum id officia fugiat.
      </p>
      <p>
        Culpa officia nulla ut culpa proident. Veniam amet anim laboris ipsum
        duis sit ea ut deserunt officia reprehenderit voluptate officia eu. Qui
        aliqua incididunt eiusmod incididunt nisi veniam eu nisi excepteur
        fugiat in laborum. Ut amet adipisicing nostrud officia proident eu
        irure. Veniam in aliqua duis duis veniam eiusmod sint aute sunt et
        pariatur minim ad sint. Veniam cupidatat reprehenderit excepteur velit
        sint sunt.
      </p>
      <p>
        Exercitation enim elit ipsum enim consequat exercitation ex id irure
        occaecat laborum mollit. Fugiat incididunt laboris nulla dolore anim
        deserunt qui excepteur dolor Lorem non id adipisicing. Magna ad ea est
        aute. Consectetur aute officia ut eu nulla dolore excepteur laboris est
        reprehenderit anim.
      </p>
      <p>
        Minim sit do commodo id labore elit consequat. Reprehenderit ex laboris
        non quis ex. Consequat elit do in incididunt excepteur ut sunt aute
        tempor eiusmod nulla veniam cupidatat labore. Minim adipisicing ex
        laborum duis reprehenderit amet non ex ut.
      </p>
      <p>
        Proident ad incididunt voluptate tempor duis velit ex id. Dolore veniam
        eiusmod ut et et cupidatat irure minim esse. Aliqua ad mollit non
        voluptate aute sunt do aliqua quis est elit aliqua est. Consectetur
        mollit dolor dolor mollit exercitation anim officia et dolor ut elit
        magna occaecat.
      </p>
    </div>
  </div>
</template>

<script>
import config from '~/data/siteConfig'

export default {
  data() {
    return {
      metaTitle: 'About',
      metaDescription: 'This is the about us page.',
      // metaImage: 'about_icon.png'
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.metaDescription,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.metaTitle} - ${config.siteTitle}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.metaDescription,
        },
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
</style>
