import React from 'react';
import {Loading, ErrorMessage, AddressView} from '../../../partials/common/common';
import {Link} from 'react-router';
import {SHOW_USER_OFFERS} from "../../../../locales";

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
      <div className="ViewUser">
        <p>{user.get('firstName')} {user.get('lastName')}</p>
        <p>{user.get('email')}</p>
        <AddressView address={user.get('address')}/>
        <Link to={`user/${user.get('id')}/offers`}>{SHOW_USER_OFFERS}</Link>
      </div>
    );
  }
}