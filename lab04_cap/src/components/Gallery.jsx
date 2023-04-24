import React from "react";

const Gallery = ({ images }) => {
  return(
    <div>
      {images && images.length > 0 ? (
        images.map( (picture, index) => (
          <li className="gallery" key={index}>
            <img
              className="gallery-image"
              src={picture}
              alt="prevImage"
              width="500px"
            />
          </li>))
      ):
      (
        <div>
          <h3>THere are no screenshots yet!</h3>
        </div>
      )
      }
    </div>
  )
}

export default Gallery;