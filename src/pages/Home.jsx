import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import MyLoader from "../components/PizzaBlock/Loader";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

function Home(props) {
  const [data, setData] = useState([]);
  const loaderArr = [1, 2, 3, 4, 5, 6];
  const urlData = "https://6404dedfeed195a99f77c27d.mockapi.io/items";

  useEffect(() => {
    fetch(urlData)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {data.length === 0
          ? loaderArr.map((item, index) => <MyLoader key={index} />)
          : data.map((item, index) => (
              <PizzaBlock
                key={index}
                imgUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                sizes={item.sizes}
                width={item.types}
              />
            ))}
      </div>
    </>
  );
}

export default Home;
