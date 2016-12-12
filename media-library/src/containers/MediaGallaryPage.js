import React, { Component} from 'react'
import {connect} from 'react-redux';
// import { flickrImages, shutterStockVideos } from '../Api/api'
import {searchMediaAction} from '../actions/mediaActions';
class MediaGalleryPage extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentDidMount () {
     this.props.dispatch(searchMediaAction('rain'));
  }

  render () {
     console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'Videos');
    console.log(this.props.selecteImage, 'SelectedImage');
    console.log(this.props.selectedVideo, 'SelectedVideo');
    return (
      <div>
      </div>
    )
  }
}

// We use ES6 destructuring assignment to extract images and videos from the store’s state.
const mapStateToProps = ({images,videos}) => ({

    images:images[0],
    selectedImage:images.selectedImage,
    videos:videos[0],
    selectedvideo:videos.selectedVIdeo

})

export default connect(mapStateToProps)(MediaGalleryPage);
