import {connect} from 'react-redux';
import ViewOffer from '../../../components/pages/offer/view/ViewOffer';
import {REQUEST_GET_OFFER} from '../../../modules/offer/actions';
import {getOffer} from '../../../modules/offer/selectors';
import {SHOW_MODAL} from '../../../modules/modal/actions';
import AddRentalConnector from '../rental/AddRentalConnector';

const mapStateToProps = state => ({
  offer: getOffer(state)
});

const mapDispatchToProps = dispatch => ({
  getOffer: data => {
    dispatch(REQUEST_GET_OFFER(data));
  },
  addRental: () => dispatch(SHOW_MODAL(AddRentalConnector))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewOffer);