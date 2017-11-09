import {connect} from 'react-redux';
import SearchOffers from '../../../components/pages/offer/search/SearchOffers';
import {REQUEST_SEARCH_OFFERS} from '../../../modules/offer/actions';
import {REQUEST_DATA} from '../../../modules/form/actions';
import {getFormResponse, getStatus, getError} from '../../../modules/form/selectors';
import {SHOW_NOTIFICATION} from '../../../modules/notification/actions';

const mapStateToProps = state => ({
  offers: getFormResponse(state),
  formStatus: getStatus(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  searchOffers: data => {
    dispatch(REQUEST_SEARCH_OFFERS(data));
    dispatch(REQUEST_DATA());
  },
  showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOffers);