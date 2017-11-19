import {connect} from 'react-redux';
import {getOffers} from '../../../modules/offer/selectors';
import {REQUEST_USER_OFFERS} from '../../../modules/offer/actions';
import UserOffersList from '../../../components/pages/user/offers/UserOffersList';

const mapStateToProps = state => ({
  offers: getOffers(state)
});

const mapDispatchToProps = dispatch => ({
  getOffers: data => dispatch(REQUEST_USER_OFFERS(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserOffersList);