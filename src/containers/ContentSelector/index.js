import Message from '../Messages'
import React, { Component, Fragment } from 'react';

class ContentSelector extends Component {
    
    render() {
        return (
            <Fragment>
                {
                    this.props.if 
                    ? <Message message="Loading..." type="loading"></Message>
                    : this.props.or 
                    ? <Message message="ERROR" type="error"></Message>  
                    : this.props.then
                }
            </Fragment>
        );
    }
}

export default ContentSelector;