import React from 'react';
import PropTypes from 'prop-types';

const RentalsList = ({rentals}) => (
  <div>
    {rentals.map(rental => <Rental rental={rental}/>)}
  </div>
);

RentalsList.propTypes = {
  rentals: PropTypes.array.isRequired
};

const Rental = ({
  rental: {startDate, endDate, deliveryAddress, status, offer}
}) => (
  <div>
    {offer.title}{startDate} {endDate}
  </div>
);

export default RentalsList;