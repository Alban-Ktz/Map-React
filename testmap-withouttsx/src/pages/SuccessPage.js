import React, { Component } from 'react'
import SuccessHeader from "../components/SuccessHeader/SuccessHeader";
import Success from "../components/Success/Success";


export default class SuccessPage extends Component {
  render() {
    return (
      <div className="successPage">
        <SuccessHeader />
        <Success />
        <Success />
        <Success />
      </div>
    )
  }
}
