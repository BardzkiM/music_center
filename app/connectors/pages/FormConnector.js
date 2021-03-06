import {connect} from 'react-redux';
import {getStatus, getError} from '../../modules/form/selectors';
import {REQUEST_DATA} from '../../modules/form/actions';
import {SHOW_NOTIFICATION} from '../../modules/notification/actions';
import {SHOW_MODAL} from '../../modules/modal/actions';

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
      showNotification: payload => dispatch(SHOW_NOTIFICATION(payload)),
      showModal: payload => dispatch(SHOW_MODAL(payload))
    };

    Object.keys(dispatches)
      .forEach(key => dispatchProps[key] = data => dispatch(dispatches[key](data)));

    return dispatchProps;
  };

  return connect(mapStateToProps, mapDispatchToProps)(Component);
}

