import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentForm: 'login',
  values: {},
  messages: {},
  schedules: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentForm: (state, action) => {
      state.currentForm = action.payload
      state.values = {}
      state.messages = {}
      state.schedules = {}
    },
    setErrorParams: (state, action) => {
      console.log({in: 'authSlice', action})
      state.messages = action.payload.messages
      state.schedules = action.payload.schedules
    },
    // addMessages: (state, action) => {
    //   state.messages = {...state.messages, ...action.payload}
    // },
    setMessagesDefault: (state) => {
      state.messages = initialState.messages
      state.schedules = initialState.schedules
    },
    updateValues: (state, action) => {
      console.log(action.payload.name)
      state.values[action.payload.name] = action.payload.value
    },
    setDefault: (state) => {
      state = initialState
    },
    
  },
})

export const { 
  setCurrentForm, updateValues, setErrorParams,
  setMessagesDefault, setDefault } = authSlice.actions
export default authSlice.reducer