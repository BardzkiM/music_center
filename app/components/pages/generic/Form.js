import React from 'react';
import {Link} from 'react-router';
import {formatData} from '../../../utils/form';
import {MESSAGES, getErrorMessage} from '../../../locales';
import {SUCCESS, ERROR, LOADING} from '../../../constants';

export default class Form extends React.Component {
  constructor(successMessageText = 'SET this.successMessageText') {
    super();

    this.successMessageText = successMessageText;
  }

  handleSubmit = (event) => {
    const {sendData} = this.props;

    event.preventDefault();
    sendData(formatData(event.target));
  };

  getForm() {
  }

  render() {
    switch (this.props.formStatus) {
      case SUCCESS:
        return this.getSuccessContent();
      case LOADING:
      case ERROR:
      default:
        return this.getForm();
    }
  }

  getSuccessContent() {
    return null;
  }

  componentWillReceiveProps(nextProps) {
    const {showNotification, formStatus, error} = nextProps;
    const notificationData = {
      SUCCESS: {message: this.successMessageText, type: SUCCESS},
      ERROR: {message: getErrorMessage(error), type: ERROR},
      LOADING: {message: MESSAGES.LOADING, type: LOADING}
    }[formStatus];

    formStatus && showNotification(notificationData);
  }
}