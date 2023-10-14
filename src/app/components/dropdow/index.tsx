'use client'
import React, { useState } from 'react';
import './cardexpense.css'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button onClick={toggleDropdown}>Clique para Abrir</button>
        <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
          Conteúdo do Dropdown
        </div>
      </div>
    );
  };
  
  export default Dropdown;