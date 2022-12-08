import React from "react";
import "./Header.css";

const Header = (props) => {
  const filterCardsHandler = (event) => {
    props.changeSelectedCat(Number(event.target.dataset.cat));
  };

  return (
    <header>
      <ul>
        <li onClick={filterCardsHandler} data-cat="0">
          All
        </li>
        <li onClick={filterCardsHandler} data-cat="1">
          Major Arcana
        </li>
        <li onClick={filterCardsHandler} data-cat="2">
          Wands
        </li>
        <li onClick={filterCardsHandler} data-cat="3">
          Cups
        </li>
        <li onClick={filterCardsHandler} data-cat="4">
          Swords
        </li>
        <li onClick={filterCardsHandler} data-cat="5">
          Pentacles
        </li>
      </ul>
    </header>
  );
};

export default Header;
