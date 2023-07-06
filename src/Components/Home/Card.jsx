import React, { useEffect, useRef } from "react";

const Card = ({ title, content, onClick }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const adjustTextSize = () => {
      const titleElement = titleRef.current;
      const cardElement = titleElement.parentNode;
      const availableHeight = cardElement.offsetHeight - titleElement.offsetTop;

      if (title.length > 20) {
        let fontSize = 18; // Initial font size
        titleElement.style.fontSize = `${fontSize}px`;

        while (titleElement.scrollHeight > availableHeight && fontSize > 10) {
          fontSize -= 1;
          titleElement.style.fontSize = `${fontSize}px`;
        }
      }
    };

    adjustTextSize();
    window.addEventListener("resize", adjustTextSize);

    return () => {
      window.removeEventListener("resize", adjustTextSize);
    };
  }, [title]);

  return (
    <button className="card" onClick={onClick}>
      <div className="card-image">{content}</div>
      <p className={"text"} ref={titleRef}>
        {title}
      </p>
    </button>
  );
};

export default Card;
