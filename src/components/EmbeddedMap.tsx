// src/components/EmbeddedMap.tsx

const EmbeddedMap = () => {
  const location = { lat: 48.856614, lng: 2.3522219 };
  const googleMapsUrl = `https://www.google.com/maps/place/Decathlon/@${location.lat},${location.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e1f06e2b70f:0xd80c9447819b5f86!8m2!3d${location.lat}!4d${location.lng}`;

  return (
    <>
      {/* <h2 className="w-full text-center mb-10">Localisation</h2> */}
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDzhiDmJiGySLKUtIdK2LLQGdQKdIB-iKs&q=Annecy,France`}
          width="full"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="w-full"
        ></iframe>
      </a>
    </>
  );
};

export default EmbeddedMap;
