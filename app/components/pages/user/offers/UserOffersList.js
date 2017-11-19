import React from 'react';
import OffersList from '../../offer/list/OffersList';
import {Loading, ErrorMessage} from '../../../partials/common/common';

export default class UserOffersList extends React.Component {

  componentDidMount() {
    const {params: {id}, getOffers} = this.props;

    getOffers(id);
  }

  render() {
    const {offers} = this.props;

    if (offers) {
      if (offers.error) {
        return <ErrorMessage message={offers.error}/>;
      }

      return <OffersList offers={offers}/>;
    }

    return <Loading/>;
  }
}