import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { getFormattedDate } from "../../../../utils/dateUtil";
import { SHOW_OFFER, CANCEL_RENTAL, RENTED_ON } from "../../../../locales";
import './RentalsList.scss';

const RentalsList = ({ rentals, deactivateRental }) => (
  <div className="RentalsList">
    {rentals.map(rental => <Rental rental={rental} deactivateRental={() => deactivateRental(rental.id)}/>)}
  </div>
);

RentalsList.propTypes = {
  rentals: PropTypes.array.isRequired,
  deactivateRental: PropTypes.func
};


class Rental extends React.Component {

  isDeactivateButtonVisible(deactivateRental, rental) {
    const { endDate, status } = rental;
    const currentDate = new Date().getTime();
    const isAfterRental = currentDate > endDate;

    return deactivateRental && status === 'ACTIVE' && !isAfterRental;
  }

  render() {
    const { rental, deactivateRental } = this.props;
    const { startDate, endDate, offer } = rental;
    const showDeactivateButton = this.isDeactivateButtonVisible(deactivateRental, rental);
    const imageUrl = offer.item.images[0];

    return (
      <div className="rental-list-item">
        <div className="image-wrapper">
          <img src={imageUrl}/>
        </div>
        <div className="item-description">
          <div>
            <p className="title">{offer.title}</p>
            <p>{RENTED_ON}:</p>
            <p>{getFormattedDate(startDate)}</p>
            <p>{getFormattedDate(endDate)}</p>
          </div>
          <div className="availability"><Link to={`/offer/${offer.id}`}>{SHOW_OFFER}</Link></div>
          {showDeactivateButton && <div className="cancel" onClick={deactivateRental}>{CANCEL_RENTAL}</div>}
        </div>
      </div>
    )
  }
}

Rental.propTypes = {
  rental: PropTypes.object.isRequired,
  deactivateRental: PropTypes.func
};

export default RentalsList;