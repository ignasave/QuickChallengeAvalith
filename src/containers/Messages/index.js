import './Messages.css'
import { Link } from 'react-router-dom'
import React, { Component, Fragment } from 'react'


class Message extends Component {

  isError(){
    if(this.props.type === 'error'){
      return <Link to="/" className="go-back">Go back</Link>
    }  
  }

  render() {
    return (
      <Fragment>
        <h2 className={ this.props.type + ' title' }>{ this.props.message }</h2>
        {this.isError()}
      </Fragment>
      )
  }
}

export default Message
