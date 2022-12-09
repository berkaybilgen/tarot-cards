import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [selectedListItem, setSelectedListItem] = useState(0);

  const filterCardsHandler = (event) => {
    setSelectedListItem(Number(event.target.dataset.cat));
    props.changeSelectedCat(Number(event.target.dataset.cat));
  };

  const searchHandler = (event) => {
    props.changeSearchValue(event.target.value);
  };

  return (
    <header>
      <ul>
        <li
          className={selectedListItem === 0 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="0"
        >
          All
        </li>
        <li
          className={selectedListItem === 1 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="1"
        >
          Major Arcana
        </li>
        <li
          className={selectedListItem === 2 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="2"
        >
          Wands
        </li>
        <li
          className={selectedListItem === 3 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="3"
        >
          Cups
        </li>
        <li
          className={selectedListItem === 4 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="4"
        >
          Swords
        </li>
        <li
          className={selectedListItem === 5 ? "selected" : ""}
          onClick={filterCardsHandler}
          data-cat="5"
        >
          Pentacles
        </li>
      </ul>
      <div id="search">
        <input
          type="text"
          onChange={searchHandler}
          placeholder="Search cards"
        />
      </div>
    </header>
  );
};

export default Header;
