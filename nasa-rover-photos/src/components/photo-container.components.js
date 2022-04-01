const PhotoContainer = (props) => {
  const { img_src, rover, earth_date, camera, id } = props.photo;
  const { deletePhoto } = props;

  return (
    <div className="photo-container col-md-4">
      <p>{id}</p>
      <div>
        <img src={img_src} alt={camera} />
        <p>{earth_date}</p>
        <button onClick={deletePhoto}>delete</button>
      </div>
      <p>{rover.name}</p>
      <p>{camera.full_name}</p>
    </div>
  );
};

export default PhotoContainer;
