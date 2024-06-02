import { formatCurrency } from "../../../utils"
type childrenType = { children: React.ReactNode }
type valueType = { value: number }

const CardBlock: React.FC<childrenType> = ({children}) => {
    return <div className={`card p-5 rounded-lg bg-white border-2 grid grid-cols-1`} children={children} />
}

const CardTitle: React.FC<childrenType> = ({children}) => {
    return <span className={`card--title text-lg font-bold uppercase mb-2 text-gray-800`}>{children}</span>
}

const CardValue: React.FC<valueType> = ({value})  => {
    return <span className={`card--value font-medium text-gray-500`}>{ formatCurrency(value) }</span>
}

const CardWrap: React.FC<childrenType> = ({children}) => {
    return <div className="card--wrapper flex font-bold uppercase space-x-4 justify-end">{ children }</div>
}

const Card = {
    Block: CardBlock,
    Title: CardTitle,
    Value: CardValue,
    Wrap: CardWrap
}

export default Card