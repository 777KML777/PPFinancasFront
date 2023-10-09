export interface IExpense {
    id: number,
    inactive: boolean,
    separeted: boolean
    tipoPagamento: string,
    nome: string,

}

export const seedExpense = () => {
    console.log('entrei aqui')

    let obj: IExpense = {
        id: 1,
        inactive: false,
        separeted: true,
        tipoPagamento: 'Crédito',
        nome: 'Mercado Teste'
    };

    return obj;
}
