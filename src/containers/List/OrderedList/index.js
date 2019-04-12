import ListElement from './ListElement'
import React, { Component } from 'react';
import './OrderedList.css'

class OrderedList extends Component {

    renderData(){
        return this.props.breeds.map(breed => {
            return <ListElement key={breed} content={breed}/>
        });
    }

    render() {
        return (
            <ol className="ordered-list">
                {this.renderData()}
            </ol>
        );
    }
}

export default OrderedList;