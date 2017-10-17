import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Notification.scss';

class Notification extends React.Component {
  render() {
    const {notification: {message, type, show}} = this.props;
    const classes = classNames('Notification', {'show': show});

    return (
      <div className={classes}>{message} - {type}</div>
    );
  }
}

Notification.PropTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired
};

export default Notification;