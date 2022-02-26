import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Article from './pages/Article';
import ArticleCreation from './pages/ArticleCreation';
import Homepage from './pages/Homepage';
import Login from './pages/AccessAccount';
import ProfileUpdate from './pages/ProfileUpdate';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AccessAccount from './pages/AccessAccount';
import ScrollToTop from "./HOC/ScrollToTop";

function App() {

  const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [accessFormComponentOpener, setAccessFormComponentOpener] = useState(null);

  const toggleBurgerBtn = () => {
    const burgerButtonPrevState = isBurgerBtnOpen;
    setIsBurgerBtnOpen(!burgerButtonPrevState);
  }
  const toggleSearchModal = (e) => {
    e.preventDefault();
    const searchModalPrevState = isSearchModalOpen;
    setIsSearchModalOpen(!searchModalPrevState);
  }
  const toggleAccessFormComponent = () => {

  }

  return (
    <Router>
      <Navbar
        isBurgerBtnOpen={isBurgerBtnOpen}
        isSearchModalOpen={isSearchModalOpen}
        toggleSearchModal={toggleSearchModal}
        toggleBurgerBtn={toggleBurgerBtn}
      />
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/article/:postID' element={<Article />} />
          <Route exact path='/createArticle' element={<ArticleCreation />} />
          <Route exact path='/updateProfile' element={<ProfileUpdate />} />
          <Route exact path='/userAccess' element={<AccessAccount />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
