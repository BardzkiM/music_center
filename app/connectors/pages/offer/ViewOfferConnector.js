import {connect} from 'react-redux';
import ViewOffer from '../../../components/pages/offer/view/ViewOffer';
import {REQUEST_GET_OFFER} from '../../../modules/offer/actions';
import {getOffer} from '../../../modules/offer/selectors';
import {getRentals} from '../../../modules/rental/selectors'
import {SHOW_MODAL} from '../../../modules/modal/actions';
import AddRentalConnector from '../rental/AddRentalConnector';
import {REQUEST_GET_RENTALS_BY_OFFER_ID} from "../../../modules/rental/actions";

const mapStateToProps = state => ({
  offer: getOffer(state),
  rentals: getRentals(state)
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