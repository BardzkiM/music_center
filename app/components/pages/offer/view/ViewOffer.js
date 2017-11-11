import React from 'react';
import {getFormattedDate} from '../../../../utils/dateUtil';
import './ViewOffer.scss';
import {PRICE, DELIVERY_AREA, CITY, DELIVERY_PRICE, LOADING, PER_HOUR, getErrorMessage} from "../../../../locales";
import Gallery from '../../../partials/gallery/Gallery';
import Calendar from '../../../partials/calendar/Calendar';

export default class ViewOffer extends React.Component {

  componentDidMount() {
    this.props.getOffer(this.props.params.id);
  }

  getOffer() {
    const
      {offer} = this.props,
      {item} = offer;

    return (
      <div className="ViewOffer">
        <div className="offer-header">{offer.title}</div>
        <div className="photo-gallery">
          <Gallery images={item.images}/>
        </div>
        <div className="content">
          <p className="title">{offer.item.name}</p>
          <p className="title">{PRICE}: {offer.price} {PER_HOUR}</p>
          <p className="subtitle">{getFormattedDate(offer.startDate)} - {getFormattedDate(offer.endDate)}</p>
          <p className="subtitle">{CITY}: {offer.item.address.city}</p>
          <div className="delivery">
            <p className="subtitle">{DELIVERY_PRICE}: {offer.deliveryPrice}</p>
            <p className="subtitle">{DELIVERY_AREA}: {offer.deliveryMaxDistance}</p>
          </div>
          <div className="description">
            <p className="title"></p>
            <p className="subtitle">{offer.description}</p>
          </div>
        </div>
        <div className="calendar">
          <Calendar />
        </div>
      </div>
    );
  }

  getErrorInfo() {
    return(
      <div className="error-info">{getErrorMessage('OFFER_NOT_FOUND')}</div>
    );
  }

  render() {
    const {offer} = this.props;

    if(offer) {
      return offer.error ? this.getErrorInfo() : this.getOffer();
    }
    else {
      return <div>{LOADING}</div>
    }
  }
}