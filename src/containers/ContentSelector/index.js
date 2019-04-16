import Message from '../Messages'
import React, { Component, Fragment } from 'react';

class ContentSelector extends Component {
    
    showCorrespondentContent(self){
        if(self.props.if){
         return <Message message="Loading..." type="loading"></Message>
         } else if(self.props.or){  
         return <Message message="ERROR" type="error"></Message>  
         } else{ return self.props.then }
    }

    render() {
        return (
            <Fragment>
                { this.showCorrespondentContent(this) }
            </Fragment>
        );
    }
}

export default ContentSelector;