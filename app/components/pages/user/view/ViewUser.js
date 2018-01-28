import React from 'react';
import {Loading, ErrorMessage, AddressView} from '../../../partials/common/common';

export default class ViewUser extends React.Component {

  componentDidMount() {
    const {params, userId} = this.props;

    this.props.getUser(params ? params.id : userId);
  }

  render() {
    const {user} = this.props;

    if (user) {
      if (user.get('error')) {
        return <ErrorMessage message={user.get('error')}/>
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