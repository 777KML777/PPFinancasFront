'use client'
import React, { useState } from 'react';
import './cardexpense.css'
import { IExpense } from '../../../seed/expense/expenseDto'

export interface IExpenseProps {
  expense: IExpense
}

const Dropdown = (props: IExpenseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const mapBoolean = (param: boolean) => {
    return param ? 'Sim' : 'Não'
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Nome Mercado Teste</button>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <hr className='dropdown_separator' />
        <hr className='progress_bar' />
        <div className="cardexpense_content">
          <p>Inativo: {mapBoolean(props.expense.inactive)}</p>
          <p>Separado: {mapBoolean(props.expense.separeted)}</p>
          <p>Tipo De Pagamento: {props.expense.tipoPagamento}</p>
        </div>
        <div
          className="cardexpense_footer"
        >
          <button
          >
            Cancelar
          </button>
          <button
          >
            Atualizar
          </button>
        </div>
      </div >
    </div >
  );
};

export default Dropdown;
