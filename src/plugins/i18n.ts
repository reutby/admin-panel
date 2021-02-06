import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

import en from '../i18n/en.json'
import he from '../i18n/he.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  messages: { en, he }
})

const loadedLanguages = ['en']

const setI18nLanguage = (lang) => {
  i18n.locale = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  // document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export const loadLanguageAsync = (lang = 'en') => {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  // If the language hasn't been loaded yet
  return import(`@/i18n/${lang}.json`).then((messages) => {
    i18n.setLocaleMessage(lang, messages)
    loadedLanguages.push(lang)
    return setI18nLanguage(lang)
  })
}
