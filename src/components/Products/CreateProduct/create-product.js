import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './create-product.scss'; // Importa el archivo SCSS

function CreateProduct(){
    const [_nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const onNameChange = (e) => {
        
        setNombre(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        createProducto();
        navigate('/frontpage');
    }

    function createProducto() {
        let nombre = _nombre;
        fetch('http://localhost:8080/api/v1/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre }),
        })
        
    }

    return (
        <div className="create-product-container"> {/* Aplica el contenedor del formulario */}
            <Element.Form onSubmit={handleSubmit}>
                <div className='grid'> {/* Aplica el grid */}
                    <div className='grid-item'>
                        <Element.Form.Control type='text' placeholder="Nombre del producto" onChange={e => onNameChange(e.target.value)} required className="input-field" /> {/* Aplica el campo de entrada */}
                    </div>
                </div>
                <Element.Button type="submit" className="register-button">Registrar producto</Element.Button> {/* Aplica el botón de registro */}
            </Element.Form>
        </div>
    );
}

export default CreateProduct;
