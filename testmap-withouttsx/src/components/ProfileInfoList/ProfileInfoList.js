import React, { Component } from 'react'
import "./ProfileInfoList.css"
import ProfileInfo from "../ProfileInfo/ProfileInfo";

export default class ProfileInfoList extends Component {
  render() {
    return (
      <div className="profileInfoList">
          <ProfileInfo />
      </div>
    )
  }
}
