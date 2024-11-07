// import React, { useState } from "react";
import "./App.css";
import DropdownFilter from "./components/DropdownFilter";
import Liste from "./components/Liste";
import Title from "./components/Title";
function App() {
  return (
    <>
      <div className="background">
        <Title />
        <Liste />
        <DropdownFilter />
      </div>
    </>
  );
}

export default App;
