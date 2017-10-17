import {connect} from 'react-redux';

import Notification from '../../components/layout/notification/Notification';
import {HIDE_NOTIFICATION} from '../../modules/notification/actions';
import {getNotification} from '../../modules/notification/selector';

const mapStateToProps = state => ({
  notification: getNotification(state).toJS()
});
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(HIDE_NOTIFICATION())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);