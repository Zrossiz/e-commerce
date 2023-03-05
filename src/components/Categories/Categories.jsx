import React from "react";
import { useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (value) => {
    setActiveIndex(value);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((text, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={index === activeIndex ? "active" : ""}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
