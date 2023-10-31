import React, { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    const imageObjects = files.map((file) => ({
      id: file.name + Date.now(),
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...imageObjects]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Uploader</h1>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <div className="Image-grid" >
          <img style={{'width':'400px'}} src="https://storage.googleapis.com/cats-eye-images/loeblo2pywtacgm2oxe.jpeg" />
          <img style={{'width':'400px'}} src="https://truepic.com/wp-content/uploads/2023/03/transparency_artistic-composite.jpg" />
          {/* <img style={{'width':'400px'}} src="https://storage.googleapis.com/cats-eye-images/lo8gg5twv6btgybnyir.jpg" /> */}
          <img style={{'width':'400px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6-MfoJ0MLH3ZH7oIyNvP_PfLRoYI-ZgPeQ&usqp=CAU" />
          <img style={{'width':'400px'}} src="https://storage.googleapis.com/cats-eye-images/loeboobo66upr8eqohj.jpg" />
          {images.map((image) => (
            // <div key={image.id} className="Image-item">
              <img style={{'width':'400px'}} src={image.url} alt={`Uploaded ${image.id}`} />
            // </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
