import React from "react";
import { useState } from "react";

const Categories = ({ value, categoryId }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((text, index) => (
          <li
            key={index}
            onClick={() => value(index)}
            className={index === categoryId ? "active" : ""}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
