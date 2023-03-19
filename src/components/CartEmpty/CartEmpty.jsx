import React from "react";
import { Link } from "react-router-dom";
import cartEmptyImg from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>У вас нет заказов</p>
      <img src={cartEmptyImg} alt="" />
      <Link to="/" className="button button-black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
