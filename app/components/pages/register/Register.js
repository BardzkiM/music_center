import React from 'react';
import {Link} from 'react-router';

import {formatData, getFormControlsDOM} from '../../../utils/form';
import {SubmitControl} from "../../partials/form/InputControls";
import {
  LOGIN, PASSWORD, REGISTER, FIRST_NAME, LAST_NAME, ADDRESS, EMAIL
  , GO_TO_LOGIN_PAGE
  , MESSAGES
  , getError
} from '../../../locales';
import {SUCCESS, ERROR, LOADING} from '../../../constants';

const formControls = [
  {name: 'login', text: LOGIN, type: 'text'},
  {name: 'password', text: PASSWORD, type: 'password'},
  {name: 'firstName', text: FIRST_NAME, type: 'text'},
  {name: 'lastName', text: LAST_NAME, type: 'text'},
  {name: 'address', text: ADDRESS, type: 'text'},
  {name: 'email', text: EMAIL, type: 'email'}
];

export default class RegisterPage extends React.Component {

  handleSubmit = event => {
    const {sendRegisterData} = this.props;

    event.preventDefault();

    sendRegisterData(formatData(this.form));
  };

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={REGISTER}/>
        </form>
      </div>
    );
  }

  render() {
    switch (this.props.formStatus) {
      case SUCCESS:
        return <Link to='/login'>{GO_TO_LOGIN_PAGE}</Link>;
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
      SUCCESS: {message: MESSAGES.REGISTERED, type: SUCCESS},
      ERROR: {message: getError(error), type: ERROR},
      LOADING: {message: MESSAGES.LOADING, type: LOADING}
    }[formStatus];

    formStatus && showNotification(notificationData);
  }
}