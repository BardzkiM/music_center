import React from 'react';

import {formatData} from "../../../utils/form";

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
          <label htmlFor='login'>Login</label>
          <input id='login' type='text' name='login'/>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password'/>
          <input type='submit' value='LOG IN'/>
        </form>
      </div>
    );
  }
}