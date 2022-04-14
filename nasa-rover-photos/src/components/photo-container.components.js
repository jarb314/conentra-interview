const PhotoContainer = (props) => {
  const { img_src, rover, earth_date, camera } = props.photo;
  const { deletePhoto } = props;

  return (
    <div className="photo-container col-md-6 col-lg-4">
      {/* <p>{id}</p> */}
      <img src={img_src} alt={camera} />
      <div className="right-components">
        <button className="delete-btn" onClick={deletePhoto}>
          Eliminar
        </button>
        <p className="date">{earth_date}</p>
      </div>
      <div className="bottom-components">
        <p className="camera">{camera.full_name}</p>
        <p className="name">{rover.name}</p>
      </div>
    </div>
  );
};

export default PhotoContainer;
