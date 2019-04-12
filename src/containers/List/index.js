import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentSelector from '../ContentSelector'
import { getData } from '../../modules/thunk'
import './List.css';
import React, { Component } from 'react';
import OrderedList from './OrderedList';

class List extends Component {

    componentDidMount(){
        this.props.getData()
    }

    render() {
        return (
            <div className="list">
                <ContentSelector 
                    if={ this.props.isFetching }
                    or={ this.props.isError }
                    then={ <OrderedList breeds={this.props.breeds}/>  }
                />
            </div>
        );
    }
}

const mapStateToProps = ({ breeds }) => ({
    breeds: breeds.breeds,
    isError: breeds.isErrorBreeds,
    isFetching: breeds.isFetchingBreeds,
  })
  
const mapDispatchToProps = dispatch =>
bindActionCreators({ getData }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List)