import {connect} from 'react-redux';
import {getStatus, getError} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {SHOW_NOTIFICATION} from '../../modules/notification/actions';

export default function FormConnector(Component, requestAction, states = {}, dispatches = {}) {
  const mapStateToProps = state => {
    const stateToProps = {formStatus: getStatus(state), error: getError(state)};
    Object.keys(states).forEach(key => stateToProps[key] = states[key](state));

    return stateToProps;
  };

  const mapDispatchToProps = dispatch => {
    const dispatchProps = {
      sendData: data => {
        dispatch(REQUEST_DATA());
        dispatch(requestAction(data));
      },
      showNotification: payload => dispatch(SHOW_NOTIFICATION(payload))
    };

    Object.keys(dispatches)
      .forEach(key => dispatchProps[key] = () => dispatch(dispatches[key]));

    return dispatchProps;
  };

  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

