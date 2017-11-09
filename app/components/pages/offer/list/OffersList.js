import React from 'react';
import PropTypes from 'prop-types';

const OffersList = ({offers}) => (
  <div>
    {offers.map(offer => <OfferCard key={offer.id} offer={offer}/>)}
  </div>
);

const OfferCard = ({
  offer: {
    item,
    title,
    description,
    price,
    startDate,
    endDate,
    deliveryMaxDistance,
    deliveryPrice
  }
}) => (
  <div>
    <div>{title}</div>
    <div>{item.name}</div>
  </div>
);

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;