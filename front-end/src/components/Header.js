import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

import './Header.css';
export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                <button type="submit">Consulta</button>
           
                </Link>
                <Link to="/newcon">                
         
                <button type="submit">Cálculo consumo</button>
                </Link>
                <Link to="/new">                
         
                <button type="submit">Cálculo de viagem</button>
                </Link>
            </div>
        </header>
    );
}