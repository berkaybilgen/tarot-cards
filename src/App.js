import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import CardList from "./component/CardList";

function App() {
  const [selectedCat, setSelectedCat] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const changeSelectedCat = (cat) => {
    setSelectedCat(cat);
  };

  const changeSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Header
        changeSearchValue={changeSearchValue}
        changeSelectedCat={changeSelectedCat}
      />
      <CardList searchValue={searchValue} selectedCat={selectedCat} />
    </div>
  );
}

export default App;
