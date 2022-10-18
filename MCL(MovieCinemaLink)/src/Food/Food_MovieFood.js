// Food_MovieFood.js
import React from "react";
import "./Food_MovieFood.css";

import { Link } from "react-scroll";
import { Popcorn, Cookie, ade, coffee, dessert } from "./Food_information";

import Footer from "../Main/Footer";
import Header from "../Main/Header";

const Food_MovieFood = () => {
  function Food({ name, picture, price }) {
    return (
      <div>
        <img src={picture} id="menuimg" />
        <div className="information">
          {name} <br />
          가격: {price}
        </div>
      </div>
    );
  }

  function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image} price={dish.price} />;
  }

  return (
    <div className="Section">
      <Header />
      <h3>무비푸드</h3>
      <div className="food">
        <div className="Popcorn">
          <div className="underline">
            <h4 id="Popcornclick">팝콘</h4>
          </div>
          <div className="foodimg1">{Popcorn.map(renderFood)}</div>
        </div>

        <div className="Ade">
          <div className="underline">
            <h4 id="Adeclick">에이드</h4>
          </div>
          <div className="foodimg2">{Cookie.map(renderFood)}</div>
        </div>

        <div className="tea">
          <div className="underline">
            <h4 id="teaclick">티(티바나)</h4>
          </div>
          <div className="foodimg3">{ade.map(renderFood)}</div>
        </div>

        <div className="coffee">
          <div className="underline">
            <h4 id="coffeeclick">커피</h4>
          </div>
          <div className="foodimg4">{coffee.map(renderFood)}</div>
        </div>

        <div className="dessert">
          <div className="underline">
            <h4 id="dessertclick">간식</h4>
          </div>
          <div className="foodimg5">{dessert.map(renderFood)}</div>
        </div>

        <div className="scroll">
          <div id="smallmenu1">
            <Link to="Popcornclick" spy={true} smooth={true}>
              <h4>팝콘</h4>
              <p>Popcorn</p>
            </Link>
          </div>
          <div id="smallmenu2">
            <Link to="Adeclick" spy={true} smooth={true}>
              <h4>에이드</h4>
              <p>Ade</p>
            </Link>
          </div>
          <div id="smallmenu3">
            <Link to="teaclick" spy={true} smooth={true}>
              <h4>티(티바나)</h4>
              <p>tea</p>
            </Link>
          </div>
          <div id="smallmenu4">
            <Link to="coffeeclick" spy={true} smooth={true}>
              <h4>커피</h4>
              <p>coffee</p>
            </Link>
          </div>
          <div id="smallmenu5">
            <Link to="dessertclick" sp={true} smooth={true}>
              <h4>간식</h4>
              <p>dessert</p>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Food_MovieFood;
