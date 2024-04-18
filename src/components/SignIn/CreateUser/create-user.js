import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './create-user.scss'; // Importa el archivo SCSS

function CreateUser(){
    const [_nickname, setNickname] = useState('');
    const [_contrasena, setContrasena] = useState('');
    const navigate = useNavigate();


    const onNicknameChange = (e) => {
            setNickname(e);
    }

    const onPasswordChange = (e) => {
       

        setContrasena(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        createUsuario();
        navigate('/login');
    }

    function createUsuario() {
        let nickname = _nickname;
        let contrasena = _contrasena;
        fetch('http://localhost:8080/api/v1/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nickname, contrasena }),
        })
    }

    return (
        <div className="create-user-container"> {/* Aplica el contenedor del formulario */}
            <Element.Form onSubmit={handleSubmit}>
                <div className='grid'> {/* Aplica el grid */}
                    <div className='grid-item'>
                        <Element.Form.Control type='text' placeholder="Nickname" onChange={e => onNicknameChange(e.target.value)} required className="input-field" />
                    </div>
                    <div className='grid-item'>
                        <Element.Form.Control type='password' placeholder="Contraseña" onChange={e => onPasswordChange(e.target.value)} required className="input-field" />
                    </div>
                </div>
                <Element.Button type="submit" className="register-button">Registrar</Element.Button> {/* Aplica el botón de registro */}
                <p>Ya estás registrado? <a onClick={() => navigate('/login')} className="back-link">Volver</a></p> {/* Aplica el enlace de volver */}
            </Element.Form>
        </div>
    );
}

export default CreateUser;
