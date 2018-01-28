import React from 'react';
import {Link} from 'react-router';
import {getFormattedDate} from '../../../../utils/dateUtil';
import './ViewOffer.scss';
import {
  PRICE,
  DELIVERY_AREA,
  CITY,
  DELIVERY_PRICE,
  PER_HOUR,
  RENT,
  OFFERED_BY,
  AVAILABLE,
  DESCRIPTION
} from '../../../../locales';
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

  isOfferDisabled(offer) {
    const currentDate = new Date().getTime();
    return currentDate > offer.endDate;
  }

  getOffer() {
    const
      {offer, addRental, rentals} = this.props,
      {item} = offer,
      {user} = item;
    const isOfferDisabled = this.isOfferDisabled(offer);

    return (
      <div className="ViewOffer">
        <div className="offer-header">{offer.title}</div>
        <div className="photo-gallery">
          <Gallery images={item.images}/>
        </div>
        <div className="content">
          <p className="title">{item.name}</p>
          <p className="title">{PRICE}: {offer.price} {PER_HOUR}</p>
          <button disabled={isOfferDisabled}
                  className="button"
                  onClick={addRental}>
            {RENT}
            </button>
          <p className="subtitle">{AVAILABLE}:</p>
          <p className="subtitle">{getFormattedDate(offer.startDate)} - {getFormattedDate(offer.endDate)}</p>
          <p className="subtitle">{CITY}: {item.address.city}</p>
          <div className="delivery">
            <p className="subtitle">{DELIVERY_PRICE}: {offer.deliveryPrice}</p>
            <p className="subtitle">{DELIVERY_AREA}: {offer.deliveryMaxDistance}</p>
          </div>
          <p className="subtitle">
            {OFFERED_BY} <Link to={`/user/${user.id}`}>{user.login}</Link>
          </p>
          <div className="description">
            <p className="title">{DESCRIPTION}:</p>
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

    if(offer) {
      return offer.error ? <ErrorMessage message={OFFER_NOT_FOUND}/> : this.getOffer();
    }
    else {
      return <Loading />
    }
  }
}