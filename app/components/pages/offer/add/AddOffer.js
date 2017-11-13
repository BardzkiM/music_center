import React from 'react';
import {Link} from 'react-router';
import {SubmitControl} from '../../../partials/form/InputControls';
import {getFormControlsDOM, formatItems} from '../../../../utils/form';
import Form from '../../generic/Form';
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
  NO_ITEMS_ADDED,
  ITEM,
  NON_DELIVERABLE
} from '../../../../locales';
import CustomSelect from '../../../partials/form/CustomSelect';
import handleSubmitHelper from './handleSubmitHelper';

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

    this.state = {nonDeliverable: false, itemType: null};
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  handleSubmit = event => {
    event.preventDefault();
    handleSubmitHelper.bind(this)(event);
  };

  isItemTypeNonDeliverable() {
    return this.state.itemType === 'ROOM';
  }

  getAdjustedFormControls() {
    const {nonDeliverable} = this.state;

    if (nonDeliverable || this.isItemTypeNonDeliverable()) {
      return formControls.map(control =>
        control.name === 'deliveryPrice' ||
        control.name === 'deliveryMaxDistance'
          ? Object.assign({}, control, {value: 0, type: 'hidden'})
          : control
      );
    }

    return formControls;
  }

  adjustFormControls = item => {
    this.setState({itemType: item.type, nonDeliverable: false})
  };

  getForm() {
    const {items} = this.props;

    if (items && items.size) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <CustomSelect name='item' label={ITEM}
                          onChange={this.adjustFormControls} items={formatItems(items).toJS()}/>
            {this.isItemTypeNonDeliverable() || this.getNoDeliveryCheckbox()}
            {getFormControlsDOM(this.getAdjustedFormControls())}
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

  getNoDeliveryCheckbox() {
    return (
      <div className='form-row'>
        <label htmlFor='non-deliverable' className="">{NON_DELIVERABLE}</label>
        <input onChange={this.noDeliveryCheckboxChange}
               id='non-deliverable' type="checkbox" placeholder={NON_DELIVERABLE}/>
      </div>
    );
  }

  noDeliveryCheckboxChange = ({target}) => {
    this.setState({nonDeliverable: target.checked})
  };

  getSuccessContent() {
    return <Link to={`/offer/${this.props.offerId}`}>{SHOW_OFFER}</Link>;
  }
}