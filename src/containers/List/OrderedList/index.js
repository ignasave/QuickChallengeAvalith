import ListElement from './ListElement'
import React from 'react';
import './OrderedList.css'

function renderData(props){
    return props.breeds.map(breed => {
        return <ListElement key={breed} content={breed}/>
    });
}

function OrderedList(props){
        return (
            <ol className="ordered-list">
                {renderData(props)}
            </ol>
        )
}

export default OrderedList;