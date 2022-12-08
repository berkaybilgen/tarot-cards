import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import CardList from "./component/CardList";

function App() {
  const [selectedCat, setSelectedCat] = useState(0);

  const changeSelectedCat = (cat) => {
    setSelectedCat(cat);
  };

  return (
    <div>
      <Header changeSelectedCat={changeSelectedCat} />
      <CardList selectedCat={selectedCat} />
    </div>
  );
}

export default App;
