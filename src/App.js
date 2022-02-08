import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Article from './pages/Article';
import ArticleCreation from './pages/ArticleCreation';
import Homepage from './pages/Homepage';
import ProfileUpdate from './pages/ProfileUpdate';

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
      {/*<Homepage /> */}
      {/*<Article /> */}
      {/*<ArticleCreation />*/}
      <ProfileUpdate />
    </div>
  );
}

export default App;
