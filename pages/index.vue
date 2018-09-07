<template>
  <div>
    <Navigation />
    <section class="hero is-primary is-large">
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">
                Nuxt.js+i18n and Bulma starter pack.
              </h1>
          </div>
      </div>
    </section>

    <section class="section">
      Includes font-awesome, google analytics, a basic carousel and slide up plugins.
    </section>

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

export default {
  head() {
    return {
      title: this.$t('general.title')
    }
  },
  components: {
    Navigation,
    Footer
  },
  computed: {
    ...mapGetters([
      'makeLink'
    ])
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/app';

</style>
