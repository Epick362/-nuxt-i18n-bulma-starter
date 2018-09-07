import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight, faEnvelope, faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faBriefcase,
  faPhone
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
