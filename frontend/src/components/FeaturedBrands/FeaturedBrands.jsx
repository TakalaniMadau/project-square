import React from "react";
import axios from "axios";
import "./featured-brands.scss";
import Header from "../Header/Header";
import { useEffect, useState } from "react";

const FeaturedBrands = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    const result = await axios.get("/api/featured-brands");
    setImages(result.data.data);
  };

  return (
    <section>
      <Header
        paragraph="You'll be in good company"
        heading="Trusted by leading brands"
      />
      <div className="image-list">
        {images.map((image) => (
          <div key={image._id}>
            <img src={`/api/uploads/${image.image}`} alt={image.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
