const getPhotos = async () => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=EZG2sjh0Lz4SKf8lidFJCe0QUdd11jpQ3wZUaKaP`
  );
  console.log(response);
  const data = await response.json();
  return data.photos;
};

export default getPhotos;
