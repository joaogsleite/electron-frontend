import { setTranslations, setDefaultLanguage } from 'react-multi-lang'
import en from './en.json'

import moment from 'moment'
import 'moment/locale/en-gb'
moment.locale('en-gb') 

setTranslations({
  en,
})

setDefaultLanguage('en')
