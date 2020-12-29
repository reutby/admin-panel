import VueI18n from 'vue-i18n'
import Vue from 'vue'

import en from '../i18n/en.json'
import he from '../i18n/he.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages: { en, he }
})
