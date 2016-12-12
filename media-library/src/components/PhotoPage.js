import React, {PropTypes} from 'react'

const PhotoPage = ({images,onHandleSelectImage,selectedImage}) => {
    return (
        <div className="clo-md-6">
            <h2>Images</h2>
            <div className="selected-image">
                <div id={selectedImage.id}>
                    <h6 className="title ">{selectedImage.title}</h6>
                    <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
                </div>

            </div>
            <div className="image-thumbnail">
                {images.map((image,i)=>(
                    <div key={i} onClick={onHandleSelectImage.bind(this,image)}>
                         <img src={image.mediaUrl} alt={image.title} />
                    </div>
                ))}
            </div>

            
        </div>
    )
}

PhotoPage.propTypes = {
    images:PropTypes.array.isRequired,
    selectedImage:PropTypes.object,
    onHandleSelectImage:PropTypes.func.isRequired
}

export default PhotoPage