import { Link } from 'react-router-dom'
import './ListElement.css'
import React, { Component } from 'react';

class ListElement extends Component {
  
    render() {
        return (
            <li>
              <Link className="list-element" to={ `/breeds/${this.props.content}` }>
                { this.props.content.toUpperCase() }
              </Link>  
            </li>
        );
    }
}

export default ListElement;