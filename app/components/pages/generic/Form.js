import React from 'react';
import {Link} from 'react-router';
import {formatData} from '../../../utils/form';
import {MESSAGES, getError} from '../../../locales';
import {SUCCESS, ERROR, LOADING} from '../../../constants';


export default class Form extends React.Component {

  constructor(successMessageText = 'SET this.successMessageText') {
    super();

    this.successMessageText = successMessageText;
  }

  handleSubmit = event => {
    const {sendData} = this.props;

    event.preventDefault();
    sendData(formatData(this.form));
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
        return this.getForm();
    }
  }

  getSuccessContent() {
    return null;
  }

  componentDidUpdate() {
    const {showNotification, formStatus, error} = this.props;
    const notificationData = {
      SUCCESS: {message: this.successMessageText, type: SUCCESS},
      ERROR: {message: getError(error), type: ERROR},
      LOADING: {message: MESSAGES.LOADING, type: LOADING}
    }[formStatus];

    formStatus && showNotification(notificationData);
  }
}