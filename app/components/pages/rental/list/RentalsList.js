import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { getFormattedDate } from "../../../../utils/dateUtil";
import { SHOW_OFFER, CANCEL_RENTAL } from "../../../../locales";

const RentalsList = ({ rentals, deactivateRental }) => (
  <div>
    {rentals.map(rental => <Rental rental={rental} deactivateRental={() => deactivateRental(rental.id)}/>)}
  </div>
);

RentalsList.propTypes = {
  rentals: PropTypes.array.isRequired,
  deactivateRental: PropTypes.func
};


class Rental extends React.Component {

  render() {
    const { rental, deactivateRental } = this.props;
    const { startDate, endDate, status, offer } = rental;
    const showDeactivateButton = deactivateRental && status === 'ACTIVE';
    return (
      <div>
        {offer.title} {getFormattedDate(startDate)} {getFormattedDate(endDate)}
        <div><Link to={`/offer/${offer.id}`}>{SHOW_OFFER}</Link></div>
        {showDeactivateButton && <div onClick={deactivateRental}>{CANCEL_RENTAL}</div>}
      </div>
    )
  }
}

Rental.propTypes = {
  rental: PropTypes.object.isRequired,
  deactivateRental: PropTypes.func
};

export default RentalsList;