import React, { Component } from 'react'
import "./ProfileInfoList.css"
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import controllerIcon from "./images/controllerIcon.svg";
import mailIcon from "./images/mailIcon.svg";
import passwordIcon from "./images/passwordIcon.svg";
export default class ProfileInfoList extends Component {
  render() {

    let profileInfoData = {
      username: "test",
      email: "test",
      password: "***"
    }

    return (
      <div className="profileInfoList">
          
          <ProfileInfo icon={controllerIcon} field={profileInfoData.username}/>
          <ProfileInfo icon={mailIcon} field={profileInfoData.email}/>
          <ProfileInfo icon={passwordIcon} field={profileInfoData.password}/>
      </div>
    )
  }
}
