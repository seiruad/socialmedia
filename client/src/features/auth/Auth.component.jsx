// imports
import React from 'react';
import { LoginForm } from './components/templates/LoginForm.component';
import { RegisterForm } from './components/templates/RegisterForm.component';
import { useSelector } from 'react-redux';



export function Auth() {
  const currentForm = useSelector((state) => state.auth.currentForm)
  

  if (currentForm === 'login') {
    return (<LoginForm />)} 
  
  if (currentForm === 'register') {
    return (<RegisterForm />)
  }

  return (<div>Error</div>)
}
