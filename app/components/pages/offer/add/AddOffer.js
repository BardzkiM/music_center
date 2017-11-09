import React from 'react';
import {Link} from 'react-router';
import serialize from 'form-serialize';
import {SubmitControl} from '../../../partials/form/InputControls';
import {getFormControlsDOM, formatItems} from '../../../../utils/form';
import Form from '../../generic/Form';
import {WARNING} from '../../../../constants';
import {
  MESSAGES,
  TITLE,
  PRICE,
  DELIVERY_PRICE,
  DELIVERY_MAX_DISTANCE,
  START_DATE,
  END_DATE,
  DESCRIPTION,
  ADD_OFFER,
  SHOW_OFFER,
  NO_ITEMS_ADDED
  , ITEM
} from '../../../../locales';
import CustomSelect from '../../../partials/form/CustomSelect';

const formControls = [
  {name: 'title', text: TITLE, type: 'text'},
  {name: 'price', text: PRICE, type: 'number'},
  {name: 'deliveryPrice', text: DELIVERY_PRICE, type: 'number'},
  {name: 'deliveryMaxDistance', text: DELIVERY_MAX_DISTANCE, type: 'number'},
  {name: 'startDate', text: START_DATE, type: 'datetime-local'},
  {name: 'endDate', text: END_DATE, type: 'datetime-local'},
  {name: 'description', text: DESCRIPTION, type: 'textarea'}
];

export default class AddOffer extends Form {
  constructor() {
    super(MESSAGES.OFFER_ADDED);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  handleSubmit = event => {
    const {sendData, showNotification} = this.props;
    const data = this.formatData(serialize(event.target, {hash: true}));

    event.preventDefault();

    if (data.startDate >= data.endDate) {
      showNotification({message: MESSAGES.START_DATE_BIGGER, type: WARNING});
    } else {
      const formData = new FormData();

      formData.append('data', JSON.stringify(data));
      sendData(formData);
    }
  };

  formatData(data) {
    data.startDate = new Date(data.startDate).getTime();
    data.endDate = new Date(data.endDate).getTime();
    data.item = this.props.items.find(item => item.id == data.item);

    return data;
  }

  getForm() {
    const {items} = this.props;
    
    if (items && items.size) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <CustomSelect name='item' label={ITEM} items={formatItems(items).toJS()}/>
            {getFormControlsDOM(formControls)}
            <SubmitControl text={ADD_OFFER}/>
          </form>
        </div>
      );
    }

    if (items && !items.size) {
      return <div>{NO_ITEMS_ADDED}</div>;
    }

    return null;
  }

  getSuccessContent() {
    return <Link to={`/offer/${this.props.offerId}`}>{SHOW_OFFER}</Link>;
  }
}