// react imports
import React from 'react';
import { useDispatch } from 'react-redux';

// style and assets imports
import styles from './templates.module.scss';
import { EmailIcon } from '../assets/EmailBlack.component';
import { LockIcon } from '../assets/LockBlack.component';

// hooks and side-apps imports
import { useAuthForm } from '../../hooks/useAuthForm';
import { ValidatorSignIn } from 'features/auth/side-effects/ValidatorSignIn';


// component imports
import { Form } from '../elements/Form/Form.component';
import { FormInputGroup } from '../blocks/FormInputGroup/FormInputGroup.component';
import { FormButton } from '../elements/FormButton/FormButton.component';
import { FormText } from '../elements/FormText/FormText.component';
import { setCurrentForm } from 'features/auth/config/authSlice';
import { FormMessage } from '../elements/FormMessage/FormMessage.component';





export function LoginForm() {
  const authForm = useAuthForm(ValidatorSignIn)
  const dispatch = useDispatch()
  

  const handleLinkClick = e => {
    e.preventDefault()
    dispatch(setCurrentForm('register'))
  }


  return (
    <div className={styles.container}>
      <Form handleSubmit={(e) => authForm.handleSubmit(e)}>
        <h1 class={styles.form__title}>Войти</h1>
        <FormMessage />
        <FormInputGroup 
          name='login'
          type='text' 
          placeholder={'Введите адрес почты'}
          icon={<EmailIcon />}
        />
        <FormInputGroup 
          name='password'
          type='password' 
          placeholder={'Введите пароль'}
          icon={<LockIcon />}
        />
        <FormButton>Продолжить</FormButton>
        <FormText 
          text={'Нет аккаунта?'}
          linkText={'Создайте!'}
          onClick={handleLinkClick}
        ></FormText>
      </Form>
    </div>
  );
}
