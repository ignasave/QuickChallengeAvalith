import React from 'react';
import './ImgContainer.css'
function ImageContainer(props) {
        return (
            <img alt="" className="image-container" src={props.url}></img>
        );
}

export default ImageContainer;