import React from 'react';
import './input.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {
  Top, Registration, Login, ArticlePost, MyPage, ArticleDetail, ArticleList, InformationChange, NotFound
} from './components/Pages/Index';


function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Top/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/MyPage' element={<MyPage/>}/>
      <Route path='/ArticlePost' element={<ArticlePost/>}/>
      <Route path='/ArticleDetail' element={<ArticleDetail/>}/>
      <Route path='/ArticlrList' element={<ArticleList/>}/>
      <Route path='/InformationChange' element={<InformationChange/>}/>
      <Route path='/Notfound' element={<NotFound/>}/>
    </Routes>
  </Router>
  )
}

export default App;
