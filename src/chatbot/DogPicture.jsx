import React, { useEffect, useRef, useState } from "react";

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  useEffect(() => {
    if (imageUrl && imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [imageUrl]);

  return (
    <div>{imageUrl && <img src={imageUrl} alt="a dog" ref={imageRef} />}</div>
  );
};

export default DogPicture;
