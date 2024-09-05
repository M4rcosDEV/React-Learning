import React from 'react';
import './Menu.css'
import userPerfil from '../../assets/user.png'

function Menu({ isOpen, toggleSidebar }) {

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

            <div className="perfil-container" >
                <div id="closeBtn" onClick={toggleSidebar}>X</div>
                <img className="perfil-item" id="perfil-img" src={userPerfil} />
                <p className="perfil-item">Developer web</p>
                <hr />
                <p className="perfil-item" id="username" >Marcos Vinícius</p>
            </div>

            <div className="navigation">
                <div className="navigation-item"><a href="#">Developers</a></div>
                <div className="navigation-item"><a href="#">Skills</a></div>
                <div className="navigation-item"><a href="#">Taks</a></div>
                <div className="navigation-item"><a href="#">Settings</a></div>
            </div>
        </div>
    );
}

export default Menu