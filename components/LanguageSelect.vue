<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <span class="is-hidden-tablet">{{ $t('general.language') }}: </span>
          <img :src="'/languages/'+this.$i18n.locale+'.png'" :alt="this.$i18n.locale">
        </a>
        <div class="navbar-dropdown is-boxed is-right">
          <div class="navbar-item">
            {{ $t('general.language') }}
          </div>
          <nuxt-link
            v-for="locale of this.locales"
            :key="locale"
            class="navbar-item"
            :to="{params: {lang: locale}}"
          >
            <img class="locale-icon" :src="'/languages/'+locale+'.png'" :alt="$t('general.locales.'+locale)">
              {{ $t('general.locales.'+locale) }}
          </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';

export default {
    computed: mapState({
        locales: 'locales',
        currentLocale: 'locale'
    })
}
</script>

<style lang="scss">
@import '~assets/variables';

.navbar-dropdown {
    .locale-icon {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        box-shadow: 0 0 8px fade-out($palette-2, 0.5);
        border-radius: 16px;
    }
}
</style>
