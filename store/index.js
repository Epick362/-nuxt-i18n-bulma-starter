export const state = () => ({
    locales: ['en', 'sk'],
    locale: 'en'
  })

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}

export const getters = {
  makeLink: (state, getters) => {
    const langRx = /^lang-/

    // We use a function rather than arrow, so that "this" will be context of component
    return function (name, params = {}, query = {}) {
      const $route = this.$route
      const $router = this.$router

      // If we are on  lang- route, add lang- prefex to route name
      if (name === 'index') {
        name = `lang`
        if (!$route.params.lang) {
          $route.params.lang = `en`
        }
      } else if ((langRx.test($route.name) || $route.name === 'index' || $route.name === 'lang') && !langRx.test(name)) {
        name = `lang-${name}`
      }

      // New params object. We merge prams last, in case we want to overide the detected language
      params = Object.assign($route.params.lang ? { lang: $route.params.lang } : {}, params)

      const resolved = $router.resolve({ name, params, query })

      return resolved.location
    }
  }
}
