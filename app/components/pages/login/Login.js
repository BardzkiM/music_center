import React from 'react';

import serialize from 'form-serialize';

export default class LoginPage extends React.Component {

  handleSubmit = event => {
    const
      data = serialize(this.form, {hash: true}),
      {sendLoginData} = this.props;

    event.preventDefault();

    sendLoginData(data);
  };

  render() {
    console.log(this.props.formStatus);
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