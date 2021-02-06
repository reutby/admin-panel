import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en'
})

const loadedLanguages = ['en']

const setI18nLanguage = (lang) => {
  i18n.locale = lang
  return lang
}

export const loadLanguageAsync = (lang = 'en') => {
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang))
  }

  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang))
  }
  
  return import(`../i18n/${lang}.json`).then((messages) => {
    i18n.setLocaleMessage(lang, messages)
    loadedLanguages.push(lang)
    return setI18nLanguage(lang)
  })
}
