export interface IExpense {
    id: number,
    addPayment?: boolean,
    inactive: boolean,
    separeted: boolean,
    amount: number,
    count: number,
    firstInstallments: string, 
    lastInstallments: string, 
    name: string,
    paymentType: string,

}

export const seedExpense = () => {
    console.log('entrei aqui')

    let obj: IExpense = {
        id: 1,
        inactive: false,
        separeted: true,
        amount: 500,
        count: 12,
        firstInstallments: '12-01-20223',
        lastInstallments: '12-10-20223',
        name: 'Mercado Teste',
        paymentType: 'Crédito'
    };

    return obj;
}
