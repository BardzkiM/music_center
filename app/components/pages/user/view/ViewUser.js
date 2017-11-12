import React from 'react';
import {getErrorMessage} from '../../../../locales';
import {Loading, ErrorMessage, AddressView} from '../../../partials/common/common';

export default class ViewUser extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }

  render() {
    const {user} = this.props;
    
    if (user) {
      if (user.get('error')) {
        return <ErrorMessage message={user.get('error')} />
      }

      return this.getUser();
    }

    return <Loading />
  }

  getUser() {
    const {user} = this.props;

    return (
      <div>
        <div>{user.get('firstName')} {user.get('lastName')}</div>
        <div>{user.get('email')}</div>
        <AddressView address={user.get('address')}/>
      </div>
    );
  }
}