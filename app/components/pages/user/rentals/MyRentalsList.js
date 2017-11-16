import React from 'react';
import RentalsList from '../../rental/list/RentalsList';
import {Loading, ErrorMessage} from '../../../partials/common/common';

export default class UserRentalsList extends React.Component {
  componentDidMount() {
    this.props.getRentals();
  }

  render() {
    const {rentals} = this.props;

    if (rentals) {
      if (rentals.error) {
        return <ErrorMessage message={rentals.error}/>;
      }
      
      return <RentalsList rentals={rentals}/>;
    }

    return <Loading/>;
  }
}