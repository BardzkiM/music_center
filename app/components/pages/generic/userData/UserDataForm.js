import React from 'react';
import {Link} from 'react-router';
import {getFormControlsDOM} from '../../../../utils/form';
import {SubmitControl} from '../../../partials/form/InputControls';
import {LOGIN, PASSWORD, FIRST_NAME, LAST_NAME, EMAIL} from '../../../../locales';
import AddressFormControls from '../../../partials/form/AddressFormControls';
import Form from '../Form';
import BackToHome from '../../../partials/links/BackToHome';

const formControls = [
  {name: 'login', text: LOGIN, type: 'text'},
  {name: 'password', text: PASSWORD, type: 'password'},
  {name: 'firstName', text: FIRST_NAME, type: 'text'},
  {name: 'lastName', text: LAST_NAME, type: 'text'},
  {name: 'email', text: EMAIL, type: 'email'}
];

export default class UserDataForm extends Form {

  componentWillMount() {
    const {userData} = this.props;

    formControls.forEach(control =>
      userData ? control.value = userData.get(control.name) : delete control.value
    );
  }

  getForm() {
    const {userData} = this.props;
    const addressData = userData && userData.get('address');

    return (
      <div>
        <form className="generic-form" onSubmit={this.handleSubmit}>
          {getFormControlsDOM(formControls)}
          <AddressFormControls values={addressData}/>
          <SubmitControl text={this.submitButtonText}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return <BackToHome/>
  }
}