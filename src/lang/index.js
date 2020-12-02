import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
// import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
// import elementJaLocale from 'element-ui/lib/locale/lang/ja'// element-ui lang
import enLocale from './en.js'
import zhLocale from './zh.js'
// import esLocale from './es'
// import jaLocale from './ja'

// import { getLanguageCode, setLanguageCode } from '@/utils/sessionStorageData.js'

Vue.use(VueI18n)

const messages = {
  'en-US': {
    ...enLocale,
    ...elementEnLocale
  },
  'zh-CN': {
    ...zhLocale,
    ...elementZhLocale
  }

  // es: {
  //   ...esLocale,
  //   ...elementEsLocale
  // },
  // ja: {
  //   ...jaLocale,
  //   ...elementJaLocale
  // }
}
export function getLanguage() {
  const chooseLanguage = sessionStorage.getItem('language')
  if (messages[chooseLanguage] !== undefined) {
    return chooseLanguage
  }

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  var locLan = null
  for (const locale of locales) {
    var nlan = locale.split('-')
    if (language === locale) {
      sessionStorage.setItem('language', locale)
      return locale
    } else if (language.indexOf(locale) > -1 || language.indexOf(nlan[0]) > -1) {
      locLan = locale
    }
  }
  if (locLan !== null) {
    sessionStorage.setItem('language', locLan)
    return locLan
  }
  sessionStorage.setItem('language', 'en-US')
  return 'en-US'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: getLanguage(),
  formatFallbackMessages: true,
  // silentTranslationWarn: true,
  fallbackLocale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
