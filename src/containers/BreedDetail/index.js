import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContentSelector from '../ContentSelector'
import { getDetail } from '../../modules/thunk';
import ImageContainer from './ImgContainer';
import React, { Component } from 'react';

class BreedDetail extends Component {

    componentDidMount(){
        this.props.getDetail(this.props.match.params.breed);
    }

    render() {
        return (
            <ContentSelector 
                if={ this.props.isFetchingDetail }
                or={ this.props.isErrorDetail }
                then={ <ImageContainer url={this.props.imageUrl}></ImageContainer> }
            />
        );
    }
}

const mapStateToProps = ({ breeds }) => ({
    imageUrl: breeds.imageUrl,
    isFetchingDetail: breeds.isFetchingDetail,
    isErrorDetail: breeds.isErrorDetail
  })
  
const mapDispatchToProps = dispatch =>
bindActionCreators({ getDetail }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BreedDetail)