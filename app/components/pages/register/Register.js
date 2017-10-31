import React from 'react';
import {Link} from 'react-router';
import {REGISTER, GO_TO_LOGIN_PAGE, MESSAGES} from '../../../locales';
import UserDataForm from '../generic/userData/UserDataForm';

export default class RegisterPage extends UserDataForm {
  constructor() {
    super(MESSAGES.REGISTERED);

    this.submitButtonText = REGISTER;
  }

  getSuccessContent() {
    return <Link to='/login'>{GO_TO_LOGIN_PAGE}</Link>;
  }
}