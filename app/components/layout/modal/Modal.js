import React from 'react';
import classNames from 'classnames';
import './Modal.scss';

export default class Modal extends React.Component {

  componentWillMount() {
    document.addEventListener('click', this.hideModal);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideModal);
  }

  hideModal = ({target}) => {
    const {hideModal, show} = this.props;

    if (show && !this.modal.contains(target)) {
      hideModal();
    }
  };

  render() {
    const {Component, show, hideModal} = this.props;
    const classes = classNames('Modal', {
      'show': show
    });

    if (show) {
      return (
        <div className={classes} ref={el => this.modal = el}>
          <div className='component-wrapper'>
            <div className='close' onClick={hideModal}>X</div>
            {<Component />}
          </div>
        </div>
      );
    }

    return null;
  }
}