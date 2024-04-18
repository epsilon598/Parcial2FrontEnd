import 'bootstrap/dist/css/bootstrap.min.css';
import * as Element from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/SignIn/Login/login';
import CreateUser from './components/SignIn/CreateUser/create-user';
import SearchBar from './components/SearchBar/search-bar';
import CreateProduct from './components/Products/CreateProduct/create-product';
import ProductList from './components/Products/ProductsList/product-list';
import HistorialProductos from './components/Products/HistorialProductos/historial-productos';
import FrontPage from './components/FrontPage/front-page';
import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/productos')
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
  }, [data]);

  return (
    <Element.Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<CreateUser />} />
          <Route path="/registrarProducto" element={<CreateProduct />} />
          <Route path="/frontpage" element={<FrontPage data={data} />} />
          <Route path="/hp" element={<HistorialProductos />} />
        </Routes>
      </BrowserRouter>
    </Element.Container>
  );
}

export default App;
