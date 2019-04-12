import Message from '../Messages';
import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <Message type="error" message="404 PAGE NOT FOUND"></Message>
        );
    }
}

export default PageNotFound;