import React from 'react';
import {getFormattedDate} from '../../../../utils/dateUtil';
import './ViewOffer.scss';
import {PRICE, DELIVERY_AREA, CITY, DELIVERY_PRICE, PER_HOUR, RENT} from '../../../../locales';
import Gallery from '../../../partials/gallery/Gallery';
import Calendar from '../../../partials/calendar/Calendar';
import {Loading, ErrorMessage} from '../../../partials/common/common';
import {OFFER_NOT_FOUND} from '../../../../constants';

export default class ViewOffer extends React.Component {

  componentDidMount() {
    this.props.getOffer(this.props.params.id);
  }

  componentDidUpdate() {
    if(this.props.offer && !this.props.rentals) {
      this.props.getRentalsByOfferId(this.props.params.id);
    }
  }

  getOffer() {
    const
      {offer, addRental, rentals} = this.props,
      {item} = offer;

    return (
      <div className="ViewOffer">
        <button onClick={addRental}>{RENT}</button>
        <div className="offer-header">{offer.title}</div>
        <div className="photo-gallery">
          <Gallery images={item.images}/>
        </div>
        <div className="content">
          <p className="title">{item.name}</p>
          <p className="title">{PRICE}: {offer.price} {PER_HOUR}</p>
          <p className="subtitle">{getFormattedDate(offer.startDate)} - {getFormattedDate(offer.endDate)}</p>
          <p className="subtitle">{CITY}: {item.address.city}</p>
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
          <Calendar events={rentals}/>
        </div>
      </div>
    );
  }

  render() {
    const {offer} = this.props;

    if (offer) {
      return offer.error ? <ErrorMessage message={OFFER_NOT_FOUND}/> : this.getOffer();
    }
    else {
      return <Loading />
    }
  }
}