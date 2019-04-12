import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LinkToHome.css'

export default class LinkToHome extends Component {
  render() {
    return (
        <Link to="/" className="link">HOME</Link>
    )
  }
}
