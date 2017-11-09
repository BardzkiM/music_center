import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import './Gallery.scss';

const Gallery = ({images}) => (
  <ImageGallery items={images.map(image => ({original: image, thumbnail: image}))}/>
);

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;