import React from 'react';
import {getError, ACTIVE, ITEM_NAME, ITEM_TYPE, ADDRESS, YES, NO} from '../../../../locales';
import {getItemTypeName} from '../../../../constants';

export default class ViewItem extends React.Component {

  componentDidMount() {
    this.props.getItem(this.props.params.id);
  }

  render() {
    const {item} = this.props;

    if (item) {
      if (item.get('error')) {
        return this.getError();
      }

      return this.getItemMarkup();
    }

    return this.getLoading();
  }

  getError() {
    return <div>{getError(this.props.item.get('error'))}</div>;
  }

  getLoading() {
    return <div>LOADING...</div>;
  }

  getItemMarkup() {
    const {item} = this.props;

    return (
      <div>
        <div>
          <span>{ACTIVE}</span>
          <span>{item.get('active') ? YES : NO}</span>
        </div>
        <div>
          <span>{ITEM_NAME}</span>
          <span>{item.get('name')}</span>
        </div>
        <div>
          <span>{ITEM_TYPE}</span>
          <span>{getItemTypeName(item.get('type'))}</span>
        </div>
        <div>
          <span>{ADDRESS}</span>
          <span>{this.getAddress(item.get('address'))}</span>
        </div>
      </div>
    );
  }

  getAddress({street, houseNumber, apartmentNumber, city, zipCode}) {
    return (
      <div>
        <div>{street} {houseNumber}/{apartmentNumber}</div>
        <div>{city}, {zipCode}</div>
      </div>
    );
  }
}