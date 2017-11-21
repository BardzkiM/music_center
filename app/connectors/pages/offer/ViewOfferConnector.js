import {connect} from 'react-redux';
import ViewOffer from '../../../components/pages/offer/view/ViewOffer';
import {REQUEST_GET_OFFER, REQUEST_GET_RENTALS_BY_OFFER_ID} from '../../../modules/offer/actions';
import {getOffer, getRentalsByOfferId} from '../../../modules/offer/selectors';
import {SHOW_MODAL} from '../../../modules/modal/actions';
import AddRentalConnector from '../rental/AddRentalConnector';

const mapStateToProps = state => ({
  offer: getOffer(state),
  rentals: getRentalsByOfferId(state)
});

const mapDispatchToProps = dispatch => ({
  getOffer: data => {
    dispatch(REQUEST_GET_OFFER(data));
  },
  getRentalsByOfferId: data => {
    dispatch(REQUEST_GET_RENTALS_BY_OFFER_ID(data));
  },
  addRental: () => dispatch(SHOW_MODAL(AddRentalConnector))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffer);