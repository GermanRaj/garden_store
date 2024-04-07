import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import AllProductPage from './pages/AllProductPage';
import CategoriesPage from './pages/CategoriesPage';
import AllSalesPage from './pages/AllSalesPage';
import Footer from './components/Footer';
import SingleProductPage from './pages/SingleProductPage';
import ProductsByCategoriesPage from './pages/ProductsByCategoriesPage';



function App() {
  return (
    <div>
    <NavMenu />
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/categories' element={<CategoriesPage/>}></Route>
        <Route path='/allproducts' element={<AllProductPage/>}></Route>
        <Route path='/allsales' element={<AllSalesPage/>}></Route>
        <Route path='/product/:id' element={<SingleProductPage/>}></Route>
        <Route path='/categories/:categoryId' element={<ProductsByCategoriesPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
