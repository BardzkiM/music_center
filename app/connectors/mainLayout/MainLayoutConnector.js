import {connect} from 'react-redux';
import {getModalShow} from '../../modules/modal/selectors';
import MainLayout from '../../components/layout/MainLayout';

const mapStateToProps = state => ({
  showModal: getModalShow(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);