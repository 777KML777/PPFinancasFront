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
      <button onClick={toggleDropdown}>Nome {props.expense.name}</button>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        <hr className='dropdown_separator' />
        <div className="cardexpense_content">
          <div className='cardexpense_content-description'>
            <p>Valor: {props.expense.amount}</p>
            <p>Parcelas Restantes: {props.expense.name}</p>
            <p>Parcelas Pagas: {props.expense.name}</p>
            <p>Total Parcelas: {props.expense.name}</p>
            <p>Inativo: {mapBoolean(props.expense.inactive)}</p>
            <p>Separado: {mapBoolean(props.expense.separeted)}</p>
            <p>Pagamento: {props.expense.paymentType}</p>
          </div>
          <div className='cardexpense_progress'>
          <hr className='progress_bar' />
          <p>n/n</p>

          </div>

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
