import React from 'react';
import * as Element from 'react-bootstrap';
import './product-card.scss'; // Importa el archivo SCSS

function ProductCard(args) {
    return (
        <Element.Card className="product-card">
            <Element.Card.Body className="product-card-body"> 
                {
                    args.contador !== undefined ?
                        <Element.Card.Title className="product-card-title">{args.product.nombre} {args.product.contadorBusquedas} </Element.Card.Title> :
                        <Element.Card.Title className="product-card-title">{args.product.nombre} </Element.Card.Title>
                }
            </Element.Card.Body>
        </Element.Card>
    );
}

export default ProductCard;
