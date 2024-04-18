import React, { useState, useEffect } from 'react';
import * as Element from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.scss'; // Importa el archivo SCSS

function Login() {
    const [_nickname, setNickname] = useState('');
    const [_contrasena, setContrasena] = useState('');
    const [_usuario, setUsuario] = useState();
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

        if (_usuario.length !== 0) {
            const id = _usuario[0].id;
            localStorage.setItem('id', id);
            localStorage.setItem('usuario', _usuario[0]);
            navigate('/frontpage');
            window.location.reload();
        }
    }

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/usuarios')
            .then((data) => data.json())
            .then((data) => {
                const user = data.filter(e => {
                    if (e.nickname == _nickname && e.contrasena == _contrasena) {
                        return e;
                    }
                });
                setUsuario(user);
            });
    }, [_usuario]);

    return (
        <div className="login-container"> {/* Aplica el contenedor del formulario */}
            <Element.Form onSubmit={handleSubmit}>
                <div className='grid'> {/* Aplica el grid */}
                    <div className='grid-item'>
                        <Element.Form.Control type='text' placeholder="Nickname" onChange={e => onNicknameChange(e.target.value)} required className="input-field" />
                    </div>
                    <div className='grid-item'>
                        <Element.Form.Control type='password' placeholder="Contraseña" onChange={e => onPasswordChange(e.target.value)} required className="input-field" />
                    </div>
                </div>
                <Element.Button type="submit" className="login-button">Login</Element.Button> {/* Aplica el botón de login */}
                <p>No estás registrado? <a onClick={() => navigate('/registrar')} className="register-link">Regístrate</a></p> {/* Aplica el enlace de registro */}
            </Element.Form>
        </div>
    );
}

export default Login;
