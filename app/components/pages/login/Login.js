import React from 'react';

import {LOG_IN, PASSWORD, LOGIN, getError, MESSAGES} from "../../../locales";
import {SUCCESS, ERROR, LOADING} from '../../../constants';
import {SubmitControl} from "../../partials/form/InputControls";
import BackToHome from '../../partials/links/BackToHome';
import {formatData, getFormControlsDOM} from "../../../utils/form";

const formControls = [
  {name: 'login', text: LOGIN, type: 'text'},
  {name: 'password', text: PASSWORD, type: 'password'}
];

export default class LoginPage extends React.Component {

  handleSubmit = event => {
    const {sendLoginData} = this.props;

    event.preventDefault();

    sendLoginData(formatData(this.form));
  };

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={LOG_IN}/>
        </form>
      </div>
    );
  }

  render() {
    switch (this.props.formStatus) {
      case SUCCESS:
        return <BackToHome/>;
      case LOADING:
      case ERROR:
      default:
        return this.getForm();
        return this.getForm();
    }
  }

  componentDidUpdate() {
    const {showNotification, formStatus, error} = this.props;
    const notificationData = {
      SUCCESS: {message: MESSAGES.LOGGED_IN, type: SUCCESS},
      ERROR: {message: getError(error), type: ERROR},
      LOADING: {message: MESSAGES.LOADING, type: LOADING}
    }[formStatus];

    formStatus && showNotification(notificationData);
  }
}