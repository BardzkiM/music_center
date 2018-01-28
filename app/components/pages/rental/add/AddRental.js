import React from 'react';
import { Link } from 'react-router';
import Form from '../../generic/Form';
import serialize from 'form-serialize';
import {
  START_DATE,
  END_DATE,
  MESSAGES,
  ADD_RENTAL,
  SHOW_RENTAL,
  USE_USER_ADDRESS,
  ONLY_PERSONAL_COLLECTION
} from '../../../../locales';
import {getFormControlsDOM} from '../../../../utils/form';
import {WARNING} from '../../../../constants';
import {SubmitControl} from '../../../partials/form/InputControls';
import AddressFormControls from '../../../partials/form/AddressFormControls';
import {ErrorMessage, Loading, InfoMessage} from '../../../partials/common/common';

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

    const {showNotification, sendData, offer} = this.props;
    const data = this.formatData(serialize(event.target, {hash: true}));

    if (data.startDate >= data.endDate) {
      showNotification({message: MESSAGES.START_DATE_BIGGER, type: WARNING});
    } else {
      const formData = new FormData();

      formData.append('data', JSON.stringify(data));
      formData.append('useUserAddress', this.state.useUserAddress);
      formData.append('offerId', offer.id);

      sendData(formData);
    }
  };

  formatData(data) {
    data.startDate = new Date(data.startDate).getTime();
    data.endDate = new Date(data.endDate).getTime();

    return data;
  }

  isOfferDeliverable() {
    return this.props.offer.deliveryMaxDistance > 0;
  }

  getForm() {
    const {offer} = this.props;

    if (offer) {
      if (offer.error) {
        return <ErrorMessage message={offer.error}/>
      }

      const isOfferDeliverable = this.isOfferDeliverable();

      return (
        <div>
          <form className="generic-form" onSubmit={this.handleSubmit}>
            {isOfferDeliverable || <InfoMessage message={ONLY_PERSONAL_COLLECTION}/>}
            {getFormControlsDOM(controls)}
            {isOfferDeliverable && this.getAddressCheckbox()}
            {!this.state.useUserAddress && isOfferDeliverable && <AddressFormControls />}
            <SubmitControl text={ADD_RENTAL}/>
          </form>
        </div>
      );
    }

    return <Loading/>
  }

  getSuccessContent() {
    return (
      <div className="link-wrapper">
        <Link to={'/rental/' + this.props.rentalId}>{SHOW_RENTAL}</Link>
      </div>
    );
  }

  getAddressCheckbox() {
    return (
      <div className="form-row">
        <label htmlFor='useUserAddress' className="">{USE_USER_ADDRESS}</label>
        <div className="checkbox-wrapper">
          <input id='useUserAddress' type='checkbox' className="" onClick={this.handleCheckboxChange}/>
        </div>
      </div>
    );
  }

  handleCheckboxChange = event => this.setState({useUserAddress: event.target.checked});
}