import React, { useState } from 'react';
import './App.css'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    if(isSidebarOpen){
      console.log('Está aberto')
    }else{
      console.log('Está fechado')
    }
    
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Home isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Menu toggleSidebar={toggleSidebar}/>
    </div>
  );
}

export default App
