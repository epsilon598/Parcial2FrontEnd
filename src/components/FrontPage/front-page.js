import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Element from 'react-bootstrap';
import SearchBar from '../SearchBar/search-bar';
import ProductList from '../Products/ProductsList/product-list';
import './front-page.scss'; // Importa el archivo SCSS

function FrontPage({ data }) {
    const navigate = useNavigate();

    return (
        <div className="front-page-container"> {/* Aplica el contenedor principal */}
            <div className="table-container"> {/* Aplica el contenedor de la tabla */}
                <table>
                    <tr>
                        <th> <SearchBar placeholder='Buscar productos' data={data}></SearchBar> </th>
                        <th><Element.Button onClick={() => navigate('/registrarProducto')}>Registrar producto</Element.Button></th>
                        <th><Element.Button onClick={() => navigate('/hp')}>Historial de productos</Element.Button></th>
                    </tr>
                </table>
            </div>

            <br></br>
            <ProductList></ProductList>
        </div>
    );
}

export default FrontPage;
