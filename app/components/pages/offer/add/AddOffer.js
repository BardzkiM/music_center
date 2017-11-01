import React from 'react';
import {Link} from 'react-router';
import {SubmitControl} from '../../../partials/form/InputControls';
import {getFormControlsDOM} from '../../../../utils/form';
import Form from '../../generic/Form';

const formControls = [
  {name: 'title', text: 'TITLE', type: 'text'},
  {name: 'price', text: 'PRICE', type: 'number'},
  {name: 'deliveryPrice', text: 'DELIVERY_PRICE', type: 'number'},
  {name: 'deliveryMaxDistance', text: 'DELIVERY_MAX_DISTANCE', type: 'number'},
  {name: 'startDate', text: 'START_DATE', type: 'date'},
  {name: 'startHour', text: 'START_HOUR', type: 'number'},
  {name: 'endDate', text: 'END_DATE', type: 'date'},
  {name: 'endHour', text: 'END_HOUR', type: 'number'},
  {name: 'description', text: 'DESCRIPTION', type: 'textarea'}
];

export default class LoginPage extends Form {
  constructor() {
    super('ADD_ITEM');
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  getForm() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} ref={el => this.form = el}>
          {getFormControlsDOM(formControls)}
          <SubmitControl text={'ADD_OFFER'}/>
        </form>
      </div>
    );
  }

  getSuccessContent() {
    return <Link path={`/offer/show/${this.props.offerId}`}>{'SHOW_OFFER'}</Link>;
  }
}