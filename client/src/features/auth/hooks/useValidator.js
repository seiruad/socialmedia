import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessages, setErrorParams, setMessagesDefault } from "../config/authSlice"
import {  ONDELETE_MESSAGE } from "../config/constants"
import { ValidatorSignIn } from "../side-effects/ValidatorSignIn"
import { ValidatorSignUp } from "../side-effects/ValidatorSignUp"


export const useValidator = (Validator) => {
  const values = useSelector((state) => state.auth.values)
  const schedules = useSelector((state) => state.auth.schedules)
  const messages = useSelector((state) => state.auth.messages)
  const dispatch = useDispatch()

  
  /* const validateOnly = (name, values) => {
    const report = Validator.validateOnly(name, values)
    setMessages({...messages,  ...report.messages})
    setSchedules({...schedules, ...report.schedules})
    
    return report.isValid
  } */

  const validate = (values, e=null) => {
    if (e) values[e.target.name] = e.target.value
    const report = Validator.validate(values)

    //  accept validator report
    dispatch(setErrorParams({messages: report.messages, schedules: report.schedules}))
    
    console.log({in: 'validate --useValidator', validatorReport: report})
    return report.isValid
  }

  const updateMessages = (e) => {
    dispatch(setMessagesDefault())
    // const name = e.target.name
    // if (!schedules[name] || schedules[name] === ONDELETE_MESSAGE.DELETE_CURRENT) dispatch(addMessages({[name]: ''}))
    // else if (schedules[name] === ONDELETE_MESSAGE.DELETE_ALL) dispatch(setMessagesDefault())
    // else if (schedules[name] === ONDELETE_MESSAGE.DELETE_PASSWORDS) { 
    //   dispatch(addMessages({password: '', passwordConfirm: ''}))
    // }
  }

  useEffect(() => {
    updateMessages(null)
    
  }, [values])


  return {validate}
}