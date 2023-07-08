import React from "react";
import NoImage from "../Files/logos/No-Image.png";
import "./Cards.css";

function CardImage({ imageName }) {
  let fullName = "";
  require.context("../Files/logos", false, /\.(png|jpe?g|svg)$/);
  let images = {};

  try {
    const importAll = (r) => {
      r.keys().forEach((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
    };

    importAll(require.context("../Files/logos", false, /\.(png|jpe?g|svg)$/));
  } catch (error) {
    console.error("Error occurred while importing images:", error);
  }

  const getImagePath = (imageName) => {
    const imageExtensions = [".png", ".jpg", ".jpeg", ".svg"];

    for (let i = 0; i < imageExtensions.length; i++) {
      const currentExtension = imageExtensions[i];
      const imagePath = `${imageName}${currentExtension}`;
      if (images[imagePath]) {
        fullName = `${imageName}${currentExtension}`;
        return images[imagePath];
      }
    }
    return null;
  };

  getImagePath(imageName);

  return (
    <>
      {images[fullName] ? (
        <img src={images[fullName]} alt="img" className="images" />
      ) : (
        <img src={NoImage} alt="img" className="images" />
      )}
    </>
  );
}

export default CardImage;
