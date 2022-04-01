import logo from "./nasa-logo.png";
import "./App.scss";
import PhotoContainer from "./components/photo-container.components";
import { useEffect, useState } from "react";
import getPhotos from "./nasa.service";

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    getPhotos(1).then((data) => {
      setAllPhotos(data);
      setPhotos(paginate(data, 12, 1));
    });
  }, []);

  let page = 1;
  let [photos, setPhotos] = useState([]);

  const showMore = () => {
    page += 1;
    console.log(page);
    let morePhotos = paginate(allPhotos, 12, page);
    setPhotos([...photos, ...morePhotos]);
  };

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const deletePhoto = (photo) => {
    const index = photos.indexOf(photo);
    if (index > -1) {
      photos.splice(index, 1);
      setPhotos([...photos]);
      // 2nd parameter means remove one item only
    }
  };

  return (
    <div className="App">
      <nav>
        <img src={logo} id="logo" alt="logo" />
        <h1 id="title">Mars Rover Photos</h1>
      </nav>
      <div id="photos-container" className="container ">
        <div className="row">
          {photos.map((photo, i) => (
            <PhotoContainer
              key={photo.id}
              photo={photo}
              deletePhoto={() => {
                deletePhoto(photo);
              }}
            />
          ))}
        </div>
        <button onClick={showMore}>Mostrar más</button>
      </div>
    </div>
  );
}

export default App;
