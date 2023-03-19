import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import MyLoader from "../components/PizzaBlock/Loader";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";

import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../App.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setSortType,
  setPageCount,
} from "../redux/slices/filterSlice";
import axios from "axios";

function Home() {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort);
  const pageCount = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();
  const { searchValue } = useContext(SearchContext);
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const loaderArr = [1, 2, 3, 4];
  const urlData = `https://6404dedfeed195a99f77c27d.mockapi.io/items?page=${pageCount}&limit=4&${
    categoryId > 0 ? `category=${categoryId}` : ""
  }&sortBy=${sortType.sortProperty}&order=desc`;

  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  const onChangeSort = (index) => {
    dispatch(setSortType(index));
  };

  const onChangePage = (index) => {
    dispatch(setPageCount(index));
  };

  useEffect(() => {
    setLoading(true);
    axios.get(urlData).then((res) => {
      setData(res.data);
      setLoading(false);
    });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, pageCount, urlData]);

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
        id={item.id}
      />
    ));

  const loader = loaderArr.map((item, index) => <MyLoader key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={(index) => onChangeCategory(index)}
          categoryId={categoryId}
        />
        <Sort sortType={sortType} value={(index) => onChangeSort(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? loader : pizzas}</div>
      <Pagination onChangePage={(number) => onChangePage(number)} />
    </div>
  );
}

export default Home;
