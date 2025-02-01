import React from 'react';
import Header from '../../components/header';
import HeaderImage from '../../images/header_bg_3.jpg';

import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];
  for (let i = 1; i <= galleryLength; i++) {
    images.push (require (`../../images/gallery${i}.jpg`));
  }
  console.log (images);

  return (
    <React.Fragment>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores at nobis eveniet labore aperiam cupiditate!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map ((image, index) => (
            <article key={index}>
              <img src={image} alt={`Gallery__Img ${index + 1}`} />
            </article>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Gallery;
