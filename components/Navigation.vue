<template>
  <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="localePath('/')">
          <img src="/logo.png" alt="Logo" height="53">
        </nuxt-link>

        <div @click="makeBurger" class="button navbar-burger" data-target="navMenu" v-bind:class="{ 'is-active': activator }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active': activator }">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" :to="localePath('/')">
            Item 2
          </nuxt-link>

          <nuxt-link class="navbar-item" :to="localePath('/')">
            Item 1
          </nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Dropdown
            </a>

            <div class="navbar-dropdown is-boxed">
              <nuxt-link class="navbar-item" :to="localePath('/')">
                Dropdown item 1
              </nuxt-link>
            </div>
          </div>

          <language-select />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LanguageSelect from './LanguageSelect';

export default {
  name: 'Navbar',
  data () {
    return {
      activator: false
    }
  },
  methods: {
    makeBurger () {
      this.activator = !this.activator
      return this.activator
    }
  },
  computed: {
    ...mapGetters([
      'makeLink'
    ])
  },
  components: {
    LanguageSelect
  }
}
</script>


<style lang="scss" scoped>
@import '~assets/variables';
</style>
