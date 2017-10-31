import {connect} from 'react-redux';
import {getStatus, getError} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {SHOW_NOTIFICATION} from '../../modules/notification/actions';

export default function FormConnector(Component, requestAction, states = {}, dispatches = {}) {
  const mapStateToProps = state => {
    const stateTopProps = {formStatus: getStatus(state), error: getError(state)};
    Object.keys(states).forEach(key => stateTopProps[key] = states[key](state));

    return stateTopProps;
  };

  //TODO mergin' dispatches
  const mapDispatchToProps = dispatch => ({
    sendData: data => {
      dispatch(REQUEST_DATA());
      dispatch(requestAction(data));
    },
    showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
  });

  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

