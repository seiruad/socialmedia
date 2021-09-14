import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateInput, updateValues } from "../config/authSlice"


export const useInputGroup = (name) => {
  const values = useSelector((state) => state.auth.values)
  const messages = useSelector((state) => state.auth.messages)
  const dispatch = useDispatch()

  console.log(values, messages)


  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (value) value = value.trim()
    dispatch(updateValues({name, value}))
  }

  const handleBlur = (e) => {
    // not implemented
  }
  

  let data = {}
  if (name) data = {value: values[name], message: messages[name]}
  else data = {value: '', message: ''}
  return {
    ...data,
    handleChange
  }
}