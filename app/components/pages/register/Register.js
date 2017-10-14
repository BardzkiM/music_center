import React from 'react';

import {formatData, getFormControlsDOM} from '../../../utils/form';
import {SubmitControl} from "../../partials/form/InputControls";
import {
  LOGIN, PASSWORD, REGISTER, FIRST_NAME, LAST_NAME, ADDRESS, EMAIL
} from '../../../locales';

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={REGISTER}/>
        </form>
      </div>
    );
  }
}