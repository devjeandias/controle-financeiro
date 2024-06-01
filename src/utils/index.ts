export function formatCurrency(val: number) {
    return val.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}