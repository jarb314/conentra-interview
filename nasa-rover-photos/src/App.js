import logo from "./nasa-logo.png";
import "./App.scss";
import PhotoContainer from "./components/photo-container.components";
import { useEffect, useState } from "react";
import getPhotos from "./nasa.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

let page = 1;

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  useEffect(() => {
    getPhotos(1).then((data) => {
      setAllPhotos(data);
      setPhotos(paginate(data, 12, 1));
    });
  }, []);
  let [photos, setPhotos] = useState([]);

  const showMore = () => {
    page++;
    console.log(page);
    let morePhotos = paginate(allPhotos, 12, page);

    setPhotos((prev) => {
      return [...prev, ...morePhotos];
    });
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
        <div id="copyright">
          <a
            href="https://jarbis-portfolio.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Develop by JArBis
          </a>
        </div>
      </nav>
      <div id="photos-container" className="container-fluid ">
        <div className="row g-1">
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
        <button id="show-more-btn" onClick={showMore}>
          Mostrar más
          <br />
          {/* <FontAwesomeIcon icon="fa-solid fa-rocket" /> */}
          {/* <i class="fa-solid fa-rocket"></i> */}
          <FontAwesomeIcon className="icon" icon={faRocket} />
        </button>
      </div>
    </div>
  );
}

export default App;
