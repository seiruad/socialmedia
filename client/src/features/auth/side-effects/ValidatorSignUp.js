import { ONDELETE_MESSAGE } from "../config/constants"


const isEmpty = (obj) => {
  if (Object.keys(obj).length === 0) return true
  else return false
}


export const ValidatorSignUp = {
  fields : ['login', 'password', 'passwordConfirm'],

  setPropertiesDefault: function () {
    this.messages = {}
    this.schedules = {}
  }, 

  makeReport: function () {
    return {
      messages: this.messages, 
      schedules: this.schedules, 
      isValid: isEmpty(this.messages)
    }
  }, 
  
  validateLogin: function (values, name='login') {
    console.log({inside: 'validateLogin()'})
    // check if empty
    if (!values[name]) {
      this.messages.login = 'поле не может быть пустым'
      return
    }

    if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values[name])) {
      this.messages.login = 'адрес почты должен содеражать символ @ и точку'
    }
  },

  validatePassword: function (values, name) {
    if (!values[name]) {
      this.messages[name] = 'поле не может быть пустым'
      return
    }

    const lowerCaseLetters = /[a-z]/g;
    if(!values[name].match(lowerCaseLetters)) {  
      this.messages[name] = 'пароль должен содержать строчную латинскую букву'
    }

    const upperCaseLetters = /[A-Z]/g;
    if(!values[name].match(upperCaseLetters)) {  
      this.messages[name] = 'пароль должен содержать заглавную латинскую букву'
    }

    const numbers = /[0-9]/g;
    if(!values[name].match(numbers)) {  
      this.messages[name] = 'пароль должен содержать цифру'
    }

    if(values[name].length < 8) {  
      this.messages[name] = 'пароль должен состоять минимум из 8 символов'
    }
  },

  validatePasswordConfirm: function (values) {
    console.log({inside: 'validatePasswordMatch()', values, messages: this.messages})
    if (!values.passwordConfirm) {
      this.messages.passwordConfirm = 'поле не может быть пустым'
      return
    }

    
    if (this.messages.password) { // password field invalid
      // this.messages.passwordConfirm = '_'        
    } else if (values.password !== values.passwordConfirm) { // password do not match
      this.messages.password = '_'
      this.messages.passwordConfirm = 'пароль не совпадает с введенном в поле выше'
    } else {
      return
    }
    
    this.schedules.password = ONDELETE_MESSAGE.DELETE_PASSWORDS
    this.schedules.passwordConfirm = ONDELETE_MESSAGE.DELETE_PASSWORDS
  },


  // public function
  validate: function (values) {
    this.setPropertiesDefault() 
  
    this.validateLogin(values)
    if (!isEmpty(this.messages)) return this.makeReport() 
    this.validatePassword(values, 'password')
    this.validatePasswordConfirm(values)

    return this.makeReport()
  }
}

