import React, { Component } from 'react';
import './ImgContainer.css'
class ImageContainer extends Component {
    render() {
        return (
            <img alt="" className="image-container" src={this.props.url}></img>
        );
    }
}

export default ImageContainer;