import React from 'react';
import RentalsList from '../../rental/list/RentalsList';
import { Loading, ErrorMessage } from '../../../partials/common/common';

export default class UserRentalsList extends React.Component {

  componentDidMount() {
    this.props.getRentals();
  }

  render() {
    const { rentals, deactivateRental } = this.props;

    if (rentals) {
      return rentals.error ?
        <ErrorMessage message={rentals.error}/> :
        <RentalsList rentals={rentals} deactivateRental={deactivateRental}/>;
    }

    return <Loading/>;
  }
}