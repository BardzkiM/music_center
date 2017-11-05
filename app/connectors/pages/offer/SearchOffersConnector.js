import {connect} from 'react-redux';
import SearchOffers from '../../../components/pages/offer/search/SearchOffers';
import {REQUEST_SEARCH_OFFERS} from '../../../modules/offer/actions';
import {REQUEST_DATA} from '../../../modules/form/actions';
import {getFormResponse} from '../../../modules/form/selectors';

const mapStateToProps = state => ({
  data: getFormResponse(state)
});

const mapDispatchToProps = dispatch => ({
  searchOffers: data => {
    dispatch(REQUEST_SEARCH_OFFERS(data));
    dispatch(REQUEST_DATA());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOffers);