import React from 'react';
import {Link} from 'react-router';
import AddressFormControls from '../../../partials/form/AddressFormControls';
import {ITEM_NAME, ITEM_TYPE, ADD_ITEM, SHOW_ITEM, MESSAGES, IMAGES, USE_USER_ADDRESS} from '../../../../locales';
import {getFormControlsDOM, formatData} from '../../../../utils/form';
import {ITEM_TYPES} from '../../../../constants';
import {SubmitControl} from '../../../partials/form/InputControls';
import CustomSelect from '../../../partials/form/CustomSelect';
import Form from '../../generic/Form';

const formControls = [
  {name: 'name', text: ITEM_NAME, type: 'text'},
  {name: 'images', text: IMAGES, type: 'file', multiple: true}
];

export default class AddItem extends Form {

  constructor() {
    super(MESSAGES.ITEM_ADDED);
    this.state = {useUserAddress: false};
  }

  handleSubmit = event => {
    event.preventDefault();

    const {target} = event;
    const formData = formatData(target);
    const files = target.querySelector('[type=file]').files;

    formData.append('useUserAddress', this.state.useUserAddress);
    [...files].forEach(file => formData.append('images', file));

    this.props.sendData(formData);
  };

  getForm() {
    return (
      <div>
        <form className="generic-form" onSubmit={this.handleSubmit}>
          {getFormControlsDOM(formControls)}
          <CustomSelect name='type' label={ITEM_TYPE} items={ITEM_TYPES}/>
          {this.getAddressCheckbox()}
          {!this.state.useUserAddress && <AddressFormControls />}
          <SubmitControl text={ADD_ITEM}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return (
      <div className="link-wrapper">
        <Link to={'/item/' + this.props.itemId}>{SHOW_ITEM}</Link>
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

  handleCheckboxChange = ({target}) => this.setState({useUserAddress: target.checked});
}