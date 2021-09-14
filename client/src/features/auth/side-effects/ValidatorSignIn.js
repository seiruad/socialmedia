import { ONDELETE_MESSAGE } from "../config/constants"

const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true
  else return false
}


export const ValidatorSignIn = {
  fields : ['login', 'password'],
  messageInvalid: 'адрес почты  или пароль введены неверно',
  
  validate: function (values) {
    let messages = {}
    let schedules = {}

    // check if empty fields - set messages if true
    for (const f of this.fields) {
      if (!values[f]) messages[f] = 'поле не может быть пустым' 
    }
    
    if (isEmpty(messages)) {
      if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.login)
       || !values.password.match(/[a-z]/g)
       || !values.password.match(/[A-Z]/g)
       || !values.password.match(/[0-9]/g)
       || values.password.length < 8
      ) { 
        messages.login = '_'
        messages.password = '_' 
        messages.form = 'адрес почты  или пароль введены неверно'

        schedules.login = ONDELETE_MESSAGE.DELETE_ALL
        schedules.password = ONDELETE_MESSAGE.DELETE_ALL
      } 
    }

    return {messages, schedules, isValid: isEmpty(messages)}
  }
}

