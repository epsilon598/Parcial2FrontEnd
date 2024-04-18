import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/product-card';
import './product-list.scss'; // Importa el archivo SCSS

function ProductList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/productos`, {
            method: 'GET',
        })
            .then(data => data.json())
            .then(data => {
                setProductos(data);
            })
    }, [productos]);   

    return (
        <div className="product-list-container"> {/* Aplica el contenedor de la lista de productos */}
            {
                productos.map(producto => (
                    <div className="product-list-item" key={producto.id}> {/* Aplica cada elemento de la lista de productos */}
                        <ProductCard product={producto} />
                    </div>
                ))}
        </div>
    );
}

export default ProductList;
