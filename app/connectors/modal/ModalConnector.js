import {connect} from 'react-redux';
import {getModalShow, getModalComponent} from '../../modules/modal/selectors';
import {HIDE_MODAL} from '../../modules/modal/actions';
import Modal from '../../components/layout/modal/Modal';

const mapStateToProps = state => ({
  show: getModalShow(state),
  Component: getModalComponent(state)
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(HIDE_MODAL())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);