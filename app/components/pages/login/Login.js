import React from 'react';

import {formatData, getFormControlsDOM} from "../../../utils/form";
import {LOG_IN, PASSWORD, LOGIN} from "../../../locales";
import {SubmitControl} from "../../partials/form/InputControls";

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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={LOG_IN}/>
        </form>
      </div>
    );
  }
}