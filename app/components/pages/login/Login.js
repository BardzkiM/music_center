import React from 'react';
import {LOG_IN, PASSWORD, LOGIN, MESSAGES} from '../../../locales';
import {SubmitControl} from '../../partials/form/InputControls';
import BackToHome from '../../partials/links/BackToHome';
import {getFormControlsDOM} from '../../../utils/form';
import Form from '../generic/Form';

const formControls = [
  {name: 'login', text: LOGIN, type: 'text'},
  {name: 'password', text: PASSWORD, type: 'password'}
];

export default class LoginPage extends Form {
  constructor() {
    super(MESSAGES.LOGGED_IN);
  }

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={LOG_IN}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return <BackToHome/>;
  }
}