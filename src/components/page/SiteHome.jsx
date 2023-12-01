import React from 'react'
import SiteNavbar from './SiteNavbar';
import  { useState, useEffect } from 'react';


const SiteHome = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      "https://www.biletix.com/static/images/live/spotlight/issanat-spott332899370.png",
      "https://www.biletix.com/static/images/live/spotlight/1923muzikalispotgorseli.png",
      "https://www.biletix.com/static/images/live/spotlight/keeperfestspott-391427709.jpg",
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        next();
      }, 4000);
  
      return () => clearInterval(intervalId);
    }, [currentImage]);
  
    const next = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    const prev = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  return (
    <div>
      <SiteNavbar></SiteNavbar>
      <h4 style={{ display: 'flex', justifyContent: 'center' }}>Event App ile sana uygun etkinlikleri keşfet</h4>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={images[currentImage]} alt="slide" style={{ width: '55rem', height: '30rem', marginTop: '20px' , display: 'flex'}} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
        <button onClick={prev}>Geri</button>
        <button onClick={next}>İleri</button>
      </div>
    </div>
  )
}

export default SiteHome