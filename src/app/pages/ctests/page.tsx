import './ctests.css'

import { IExpense, seedExpense } from '../../../seed/expense/expenseDto'
import CardExpense from '../../components/card_expense'
import Dropdown from '../../components/card_expense';
import RotatingButton from '../../components/FramerStudio';

export default function Ctests() {

    const expense: IExpense = seedExpense();

    return (
        <>
            <div
                className="ctests_container"
            >
                {/* <CardExpense
                    expense={expense}
                /> */}

                {/* <Dropdown
                    expense={expense}
                /> */}
                <RotatingButton />
            </div>
        </>
    )
}