import React, { Component } from 'react'

import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import ProfileInfoList from '../components/ProfileInfoList/ProfileInfoList';
export default class ProfilePage extends Component {
  render() {
    return (
      <div className="profilePage">
        <ProfileHeader />
        <ProfileInfoList />
      </div>
    )
  }
}
