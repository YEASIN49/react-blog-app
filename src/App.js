import React, { useContext, useRef, useState } from 'react';
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
import { Context } from './Context/Context';

function App() {

  // const [isBurgerBtnOpen, setIsBurgerBtnOpen] = useState(false);
  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [accessFormComponentOpener, setAccessFormComponentOpener] = useState(null);

  // CONTEXT_API DATA
  const {user} = useContext(Context);
  const homePageRef = useRef();
  

  const scrollToComponent = (ref) => window.scrollTo({
	  left: 0, 
	  top: ref.current ? ref.current.offsetTop: null,
	  behavior: 'smooth'
	});

  // const toggleBurgerBtn = () => {
  //   const burgerButtonPrevState = isBurgerBtnOpen;
  //   setIsBurgerBtnOpen(!burgerButtonPrevState);
  // }
  // const toggleSearchModal = (e) => {
  //   e.preventDefault();
  //   const searchModalPrevState = isSearchModalOpen;
  //   setIsSearchModalOpen(!searchModalPrevState);
  // }
  const toggleAccessFormComponent = () => {

  }

  return (
    <Router>
      <Navbar
        // isBurgerBtnOpen={isBurgerBtnOpen}
        // isSearchModalOpen={isSearchModalOpen}
        // toggleSearchModal={toggleSearchModal}
        // toggleBurgerBtn={toggleBurgerBtn}
        clickToJump={()=>scrollToComponent(homePageRef)}
      />
        
        {/*  */}
        <Routes>
          <Route exact path='/' element={<Homepage referenceProp={homePageRef}/>} />
          <Route exact path='/createArticle' element={<ArticleCreation />} />
          <Route exact path='/updateProfile' element={<ProfileUpdate />} />
          <Route exact path='/userAccess' element={<AccessAccount />} />
          <Route exact path='/article/:postID' element={<Article />} />
          <Route
            path="*" 
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
        />
        </Routes>
        {/* <ScrollToTop>
          <Routes>
          </Routes>
        </ScrollToTop> */}
    </Router>
    
  );
}

export default App;
