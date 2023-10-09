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


// 'use client'
// import './cardexpense.css'

// import { IExpense } from '../../../seed/expense/expenseDto'

// import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { useState } from 'react'

// export interface IExpenseProps {
//     expense: IExpense
// }

// function CardExpense(props: IExpenseProps) {

//     const [modalHidden, setModalHidden] = useState(true)

//     const modalHiddendDropdownContent = () => {
//         setModalHidden(!modalHidden);
//     }

//     const mapBoolean = (param: boolean) => {
//         return param ? 'Sim' : 'Não'
//     }

//     return (
//         <>
//             <div
//                 className="card_expense-dropdown"
//             >
//                 <button
//                     className="cardexpense"
//                     onClick={modalHiddendDropdownContent}

//                 >
//                     <p>Nome: {props.expense.nome}</p>
//                     <FontAwesomeIcon className='cardexpense_icon' icon={faChevronDown} />
//                 </button>


//                 <div
//                     className={`dropdown-content ${!modalHidden ? 'open' : ''}`}
//                     id='mydropdown'
//                     hidden={modalHidden}
//                 >
//                     <div
//                         className="cardexpense_container"
//                     >
//                         <p
//                             className='cardexpense_header'
//                         >
//                             Nome: {props.expense.nome}
//                         </p>

//                         <div className="cardexpense_content">
//                             <p>Inativo: {mapBoolean(props.expense.inmodalHidden)}</p>
//                             <p>Separado: {mapBoolean(props.expense.separeted)}</p>
//                             <p>Tipo De Pagamento: {props.expense.tipoPagamento}</p>
//                         </div>
//                         <div
//                             className="cardexpense_footer"
//                         >
//                             <button
//                             >
//                                 Cancelar
//                             </button>

//                             <button
//                             >
//                                 Atualizar
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default CardExpense;