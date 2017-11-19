import {connect} from 'react-redux';
import {getRentals} from '../../../modules/rental/selectors';
import {REQUEST_MY_RENTALS} from '../../../modules/rental/actions';
import UserRentalsList from '../../../components/pages/user/rentals/MyRentalsList';

const mapStateToProps = state => ({
  rentals: getRentals(state)
});

const mapDispatchToProps = dispatch => ({
  getRentals: data => dispatch(REQUEST_MY_RENTALS(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRentalsList);