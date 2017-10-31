import React from 'react';
import UserDataForm from '../../generic/userData/UserDataForm';
import {CHANGE_DATA, MESSAGES} from '../../../../locales';
import BackToHome from '../../../partials/links/BackToHome';

export default class EditUserData extends UserDataForm {

  constructor() {
    super(MESSAGES.USER_DATA_CHANGED);

    this.submitButtonText = CHANGE_DATA;
  }

  getSuccessContent() {
    return <BackToHome/>;
  }
}