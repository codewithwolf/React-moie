import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Movielist from './Components/MovieList/Movielist';
import Home from './Pages/Home/Home';
import Movie from './Pages/Moviedetail/Movie';




function App() {
 return (
   
   
   <Router>
    <Header />
   <Routes> 
   <Route index element={<Home />}></Route>
   <Route path='movie/:id' element={<Movie />}></Route>
   <Route path='movies/:type' element={<Movielist />}></Route>
   <Route path='/*' element={<h1>error</h1>}></Route>
   
   </Routes>
   </Router>
   
  
   
 );
}

export default App;
