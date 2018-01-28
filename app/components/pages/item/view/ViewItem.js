import React from 'react';
import {getErrorMessage, ACTIVE, ITEM_NAME, ITEM_TYPE, ADDRESS, YES, NO} from '../../../../locales';
import {getItemTypeName} from '../../../../constants';
import Gallery from '../../../partials/gallery/Gallery';
import {AddressView, Loading, ErrorMessage} from '../../../partials/common/common';
import './ViewItem.scss'

export default class ViewItem extends React.Component {

  componentDidMount() {
    this.props.getItem(this.props.params.id);
  }

  render() {
    const {item} = this.props;

    if (item) {
      if (item.get('error')) {
        return <ErrorMessage message={item.get('error')} />
      }

      return this.getItemMarkup();
    }

    return <Loading/>
  }

  getItemMarkup() {
    const
      {item} = this.props,
      images = item.get('images');

    return (
      <div className="ViewItem">
        {images && <div className="image-wrapper"><img src={images[0]}/></div>}
        <div>
          <span>{ACTIVE}: </span>
          <span>{item.get('active') ? YES : NO}</span>
        </div>
        <div>
          <span>{ITEM_NAME}: </span>
          <span>{item.get('name')}</span>
        </div>
        <div>
          <span>{ITEM_TYPE}: </span>
          <span>{getItemTypeName(item.get('type'))}</span>
        </div>
        <div>
          <span>{ADDRESS}</span>
          <div><AddressView address={item.get('address')}/></div>
        </div>
      </div>
    );
  }
}