import React from 'react';
import './Home.css'

function Home({ toggleSidebar }) {

    return (
        <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
        </button>
    );
}

export default Home