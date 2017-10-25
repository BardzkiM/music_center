import React from 'react';
import AddressFormControls from '../../../partials/form/AddressFormControls';
import {ITEM_NAME, ITEM_TYPE, ADD_ITEM, SHOW_ITEM, MESSAGES, getError, IMAGES} from '../../../../locales';
import {getFormControlsDOM, formatData} from '../../../../utils/form';
import {SUCCESS, LOADING, ERROR} from '../../../../constants';
import {SubmitControl} from '../../../partials/form/InputControls';

const formControls = [
  {name: 'name', text: ITEM_NAME, type: 'text'},
  {name: 'type', text: ITEM_TYPE, type: 'text'},
  {name: 'images', text: IMAGES, type: 'file', multiple: true}
];

class AddItem extends React.Component {

  handleSubmit = event => {
    event.preventDefault();

    const formData = formatData(this.form);
    const files = this.form.querySelector('[type=file]').files;

    formData.append('images', files);

    this.props.sendItemData(formData);
  };

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <AddressFormControls />
          <SubmitControl text={ADD_ITEM}/>
        </form>
      </div>
    );
  }

  render() {
    switch (this.props.formStatus) {
      case SUCCESS:
        return <Link to={'/item/show/' + this.props.itemId}>{SHOW_ITEM}</Link>;
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
      SUCCESS: {message: MESSAGES.ITEM_ADDED, type: SUCCESS},
      ERROR: {message: getError(error), type: ERROR},
      LOADING: {message: MESSAGES.LOADING, type: LOADING}
    }[formStatus];

    formStatus && showNotification(notificationData);
  }
}

export default AddItem;