import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard/product-card';
import './historial-productos.scss'; // Importa el archivo SCSS

function HistorialProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/productos`, {
            method: 'GET',
        })
            .then(data => data.json())
            .then(data => {
                const buscados = data.filter(e => {
                    if (e.contadorBusquedas > 0)
                        return e
                });
                setProductos(buscados);
            })
    }, [productos]);

    return (
        <div className="historial">
            {
                productos.map(producto => (
                    <div className="historial-item" key={producto.id}>
                        <ProductCard product={producto} contador={producto.contadorBusquedas}/>
                    </div>
                ))
            }
        </div>
    );
}

export default HistorialProductos;
