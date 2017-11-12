import React from 'react';
import Form from '../../generic/Form';
import serialize from 'form-serialize';
import {START_DATE, END_DATE, MESSAGES, ADD_RENTAL, SHOW_RENTAL, USE_USER_ADDRESS} from '../../../../locales';
import {formatData, getFormControlsDOM} from '../../../../utils/form';
import {WARNING} from '../../../../constants';
import {SubmitControl} from '../../../partials/form/InputControls';
import AddressFormControls from '../../../partials/form/AddressFormControls';

const controls = [
  {name: 'startDate', type: 'datetime-local', text: START_DATE},
  {name: 'endDate', type: 'datetime-local', text: END_DATE}
];

export default class AddRental extends Form {
  constructor() {
    super(MESSAGES.RENTAL_ADDED);
    this.state = {useUserAddress: false};
  }

  handleSubmit = event => {
    event.preventDefault();

    const {showNotification, params, sendData} = this.props;
    const data = this.formatData(serialize(event.target, {hash: true}));

    if (data.startDate >= data.endDate) {
      showNotification({message: MESSAGES.START_DATE_BIGGER, type: WARNING});
    } else {
      const formData = new FormData();

      formData.append('data', JSON.stringify(data));
      formData.append('useUserAddress', this.state.useUserAddress);
      formData.append('offerId', params.id);

      sendData(formData);
    }
  };

  formatData(data) {
    data.startDate = new Date(data.startDate).getTime();
    data.endDate = new Date(data.endDate).getTime();

    return data;
  }

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {getFormControlsDOM(controls)}
          {this.getAddressCheckbox()}
          {!this.state.useUserAddress && <AddressFormControls />}
          <SubmitControl text={ADD_RENTAL}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return <Link to={'/rental/' + this.props.rentalId}>{SHOW_RENTAL}</Link>;
  }

  getAddressCheckbox() {
    return (
      <div className="form-row">
        <label htmlFor='useUserAddress' className="">{USE_USER_ADDRESS}</label>
        <input id='useUserAddress' type='checkbox' className="" onClick={this.handleCheckboxChange}/>
      </div>
    );
  }

  handleCheckboxChange = event => this.setState({useUserAddress: event.target.checked});
}