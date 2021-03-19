import './Nav.css';
import React from 'react';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar pra componente */}
            <a href="/">
                <i className="fas fa-home"></i> Início
            </a>
            <a href="#/tools">
                <i className="fas fa-tools"></i> Ferramentas
            </a>
    </nav>
    </aside>