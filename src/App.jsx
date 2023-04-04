import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import HomePage from './Page/HomePage/HomePage';
import StoryPage from './Page/StoryPage/StoryPage';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductPage from './Page/ProductPage/ProductPage';
import ProductAboutPage from './Page/ProductAboutPage/ProductAboutPage';
import BlogPage from './Page/BlogPage/BlogPage';

import {Suspense} from "react"


function App() {
 

  const [english, setEnglish] = useState(false)
  const [russian, setRussian] = useState(false)
  const [uzbek, setUzbek] = useState(true)

  function change1(item){
    setEnglish(!item)
    setRussian(item)
    setUzbek(!item)
  }
  function change2(item){
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)
  }
  function change3(item){
    setEnglish(!item)
    setRussian(!item)
    setUzbek(item)
  }

  return (
    <div className="App">
      <Suspense fallback={null}>
      <Switch>
      <Route path="/" exact>
        <HomePage english={english} 
        russian={russian} uzbek={uzbek}
         change1={change1} change2={change2} change3={change3} />
      </Route>
      <Route path="/story">
         <StoryPage english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3}  />
      </Route>

      <Route path="/categoryId=:id/productId=:productId" >
          <ProductAboutPage english={english} russian={russian} 
          uzbek={uzbek} change1={change1} change2={change2} change3={change3}  />
      </Route> 

      <Route path="/blogId=:blogsId">
          <BlogPage  english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
      </Route> 
      <Route path="/categoryId=:id">
          <ProductPage english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
      </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
