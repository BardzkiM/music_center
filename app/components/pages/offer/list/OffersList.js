import React from 'react';
import PropTypes from 'prop-types';
import './OffersList.scss';
import {getFormattedDate} from "../../../../utils/dateUtil";
import {SHOW_OFFER, AVAILABLE_FROM, AVAILABLE_TO} from "../../../../locales";
import {Link} from 'react-router';

const OffersList = ({offers}) => (
  <div>
    {offers.map(offer => <OfferCard key={offer.id} offer={offer}/>)}
  </div>
);

const OfferCard = ({
  offer: {
    id,
    title,
    item,
    price,
    startDate,
    endDate
  }
}) => (
  <div className="offer-list-item">
    <div className="image-wrapper">
      <img src={item.images[0]}/>
    </div>
    <div className="item-description">
      <div>
        <p className="title">{title}</p>
        <p>{AVAILABLE_FROM}: {getFormattedDate(startDate)}</p>
        <p>{AVAILABLE_TO}: {getFormattedDate(endDate)}</p>
        <p>Price: {price}</p>
      </div>
      <div className="availability"><Link to={`/offer/${id}`}>{SHOW_OFFER}</Link></div>
    </div>
  </div>
);

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;