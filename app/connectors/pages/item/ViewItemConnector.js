import {connect} from 'react-redux';
import ViewItem from '../../../components/pages/item/view/ViewItem';
import {REQUEST_ITEM} from '../../../modules/item/actions';
import {getItem} from '../../../modules/item/selectors';

const mapStateToProps = state => ({
  item: getItem(state)
});

const mapDispatchToProps = dispatch => ({
  getItem: data => dispatch(REQUEST_ITEM(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewItem);