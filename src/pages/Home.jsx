import React, { useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import MyLoader from "../components/PizzaBlock/Loader";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";

function Home({ searchValue }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [isLoading, setIsLoading] = useState(false);
  const loaderArr = [1, 2, 3, 4, 5, 6];
  const urlData = `https://6404dedfeed195a99f77c27d.mockapi.io/items?page=${currentPage}&limit=4&${
    categoryId > 0 ? `category=${categoryId}` : ""
  }&sortBy=${sortType.sortProperty}&order=desc`;

  const onChangeCategory = (index) => {
    setCategoryId(index);
  };

  const onChangeSort = (index) => {
    setSortType(index);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(urlData)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((item, index) => (
      <PizzaBlock
        key={index}
        imgUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        sizes={item.sizes}
        width={item.types}
      />
    ));

  const loader = loaderArr.map((item, index) => <MyLoader key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={(i) => onChangeCategory(i)}
          categoryId={categoryId}
        />
        <Sort sortType={sortType} value={(i) => onChangeSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? loader : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}

export default Home;
