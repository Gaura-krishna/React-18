import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <>
        <p>
          This use "this.props.name_of_variable" in
          {this.props.component} Component
        </p>
      </>
    )
  }
}
