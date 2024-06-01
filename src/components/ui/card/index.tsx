import { formatCurrency } from "../../../utils"
type childrenType = { children: React.ReactNode }
type valueType = { value: number }

export const Card: React.FC<childrenType> = ({children}) => {
    return <div className={`card p-5 rounded-lg bg-white border-2 grid grid-cols-1`} children={children} />
}

export const CardTitle: React.FC<childrenType> = ({children}) => {
    return <span className={`card--title text-2xl font-bold uppercase mb-2`}>{children}</span>
}

export const CardValue: React.FC<valueType> = ({value})  => {
    return <span className={`card--value font-medium text-gray-500`}>{ formatCurrency(value) }</span>
}

export const CardCTAWrap: React.FC<childrenType> = ({children}) => {
    return <div className="flex font-bold uppercase space-x-4 justify-end">{ children }</div>
}