import React from 'react';
import {Link} from 'react-router';
import AddressFormControls from '../../../partials/form/AddressFormControls';
import {ITEM_NAME, ITEM_TYPE, ADD_ITEM, SHOW_ITEM, MESSAGES, IMAGES} from '../../../../locales';
import {getFormControlsDOM, formatData} from '../../../../utils/form';
import {ITEM_TYPES} from '../../../../constants';
import {SubmitControl} from '../../../partials/form/InputControls';
import CustomSelect from '../../../partials/form/CustomSelect';
import Form from '../../generic/Form';

const formControls = [
  {name: 'name', text: ITEM_NAME, type: 'text'},
  {name: 'images', text: IMAGES, type: 'file', multiple: true}
];

class AddItem extends Form {

  constructor() {
    super(MESSAGES.ITEM_ADDED);
  }

  handleSubmit = event => {
    event.preventDefault();

    const formData = formatData(this.form);
    const files = this.form.querySelector('[type=file]').files;

    [...files].forEach(file => formData.append('images', file));

    this.props.sendData(formData);
  };

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <CustomSelect name='type' label={ITEM_TYPE} items={ITEM_TYPES}/>
          <AddressFormControls />
          <SubmitControl text={ADD_ITEM}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return <Link to={'/item/show/' + this.props.itemId}>{SHOW_ITEM}</Link>;
  }
}

export default AddItem;