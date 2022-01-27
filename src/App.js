import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Homepage from './pages/Homepage';

function App() {

  const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleBurgerBtn = () => {
    const burgerButtonPrevState = isBurgerBtnOpen;
    setIsBurgerBtnOpen(!burgerButtonPrevState);
  }
  const toggleSearchModal = (e) => {
    e.preventDefault();
    const searchModalPrevState = isSearchModalOpen;
    setIsSearchModalOpen(!searchModalPrevState);
  }

  return (
    <div className="App">
      <Navbar
        isBurgerBtnOpen={isBurgerBtnOpen}
        isSearchModalOpen={isSearchModalOpen}
        toggleSearchModal={toggleSearchModal}
        toggleBurgerBtn={toggleBurgerBtn}
      />
      <Homepage />
    </div>
  );
}

export default App;
