import React from 'react';
import { useState, useRef } from 'react';
import ImageUpLoader  from  '../Pic/Image uploder.png'


const Images_ = {
  image1: '',
  image2: '',
  image3: '',
  video: '',
}

const Gallary = () => {
  const [image1, setImage] = useState('');
  const inputfile = useRef(null);

  const SaveData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = URL.createObjectURL(file);
      setImage(newImages);
    }
  }
  const changeImage = () => {
    inputfile.current.click();
    console.log('changeImage');
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = URL.createObjectURL(file);
      setImage(newImages);
    }


  }




  return (
    <>
      <div>
        <p>these image Meke your customer more Satisfied and Good hese image Meke your customer more Satisfied and Good</p>
        <div className='Gallary-Images' onClick={changeImage}>
          <img src={ImageUpLoader} alt="demo" />
          <input type="file" name="Pic1" ref={inputfile} onClick={handleImageChange} style={{ display: 'none' }} />
        </div>
        <button>save </button>
      </div>


    </>
  )
}

export default Gallary
export { Images_ };