import React from 'react';
import ViewUser from '../../../../connectors/pages/user/ViewUserConnector';

export default class ViewMyProfile extends React.Component {
  render() {
    const { loggedUser } = this.props;

    return <ViewUser userId={loggedUser.get('id')}/>
  }
}