import './Messages.css'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

function isError(props){
  if(props.type === 'error'){
    return <Link to="/" className="go-back">Go back</Link>
  }  
}

function Message(props){
    return (
      <Fragment>
        <h2 className={ props.type + ' title' }>{ props.message }</h2>
        {isError(props)}
      </Fragment>
      )
}

export default Message
