import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import closeIcon from '../../assets/cerrar.png';
import searchIcon from '../../assets/lupa.png';
import './search-bar.scss'; // Importa el archivo SCSS

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const filter = (e) => {
        const searchWord = e;
        setInputValue(searchWord);
        const newFilter = data.filter(producto => {
            const lowered = producto.nombre.toLowerCase();
            return lowered.includes(searchWord.toLowerCase());
        });

        searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter);
    }

    const clearInput = () => {
        setFilteredData([]);
        setInputValue('');
    }

    function addBusqueda(producto){
        fetch(`http://localhost:8080/api/v1/productos/${producto.id}`, {
            method: 'PUT',
        });
    }

    return (
        <div className="search-bar-container"> {/* Aplica el contenedor de la barra de búsqueda */}
            <img src={searchIcon} alt="Search Icon" className="search-icon" /> {/* Aplica el ícono de búsqueda */}
            <Element.InputGroup>
                <Element.Form.Control type='text' placeholder={placeholder} value={inputValue} onChange={(e) => filter(e.target.value)} className="search-input" /> {/* Aplica el campo de búsqueda */}
                {
                   filteredData.length !== 0 || inputValue.length !== 0 ?
                   <img className='search-bar-button-image' src={closeIcon} onClick={clearInput} alt ="search" style={{
                       maxHeight: '20px',
                       maxWidth: '20px',
                   }} /> :
                   <img className='search-bar-button-image' src={searchIcon} alt = "search" style={{
                       maxHeight: '26px',
                       maxWidth: '26px',
                   }} />
                } 
            </Element.InputGroup>
            {
                filteredData.length > 0 && (
                    <div className='results'> {/* Aplica la lista de resultados */}
                        {
                            filteredData.slice(0, 10).map((producto, index) => {
                                return (
                                    <a href="#" className='search-bar-item' key={index} onClick={() => addBusqueda(producto)}> {/* Aplica cada elemento de resultado */}
                                        <p className='search-bar-result'>{producto.nombre}</p>
                                    </a>
                                );
                            })
                        }
                    </div>
                )}
        </div>
    );
}

export default SearchBar;
