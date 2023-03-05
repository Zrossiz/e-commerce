import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Sort from "./components/Sort/Sort";

import "./scss/app.scss";

import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              {/*<Categories />*/}
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((item, index) => {
                return (
                  <PizzaBlock
                    key={index}
                    imgUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                    sizes={item.sizes}
                    width={item.types}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
