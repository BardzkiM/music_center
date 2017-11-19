import React from 'react';
import serialize from 'form-serialize';
import moment from 'moment';
import {ITEM_TYPE, TITLE, CITY, MAX_PRICE, DATE, SEARCH, MESSAGES, getErrorMessage} from '../../../../locales';
import {getFormControlsDOM} from '../../../../utils/form';
import {SubmitControl} from '../../../partials/form/InputControls';
import {ITEM_TYPES, WARNING, INFO, ERROR, SUCCESS} from '../../../../constants';
import CustomSelect from '../../../partials/form/CustomSelect';
import OffersList from '../list/OffersList';

const currentDate = moment().format('YYYY-MM-DDTHH:00');
const endDate = moment().add(1, 'hours').format('YYYY-MM-DDTHH:00');

const formControls = [
  {name: 'title', text: TITLE, type: 'text'},
  {name: 'maxPrice', text: MAX_PRICE, type: 'number', required: false},
  {name: 'city', text: CITY, type: 'text', required: false},
  {name: 'startDate', text: DATE, type: 'datetime-local', value: currentDate},
  {name: 'endDate', text: DATE, type: 'datetime-local', value: endDate}
];

export default class SearchOffers extends React.Component {

  handleSubmit = event => {
    event.preventDefault();

    const data = this.formatData(serialize(event.target, {hash: true}));

    if (data.startDate >= data.endDate) {
      this.props.showNotification({message: MESSAGES.START_DATE_BIGGER, type: WARNING});
    } else {
      const formData = new FormData();

      formData.append('data', JSON.stringify(data));
      this.props.searchOffers(formData);
    }
  };

  formatData(data) {
    data.startDate = new Date(data.startDate).getTime();
    data.endDate = new Date(data.endDate).getTime();

    return data;
  }

  componentDidUpdate() {
    const {formStatus, error} = this.props;

    if (formStatus === ERROR) {
      this.props.showNotification({message: getErrorMessage(error), type: INFO});
    }
  }

  render() {
    const {offers, formStatus} = this.props;
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CustomSelect name='type' label={ITEM_TYPE} items={ITEM_TYPES}/>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={SEARCH}/>
        </form>
        {formStatus === SUCCESS && <OffersList offers={offers}/>}
      </div>
    );
  }
}