export function Button({...props}){
    return <button className={props.className}>{props.children}</button>
}

export function ButtonEdit({...props}){
    return <button className={`uppercase text-red-600 ${props.className}`}>{props.children}</button>
}

export function ButtonDel({...props}){
    return <button className={`uppercase text-green-600 ${props.className}`}>{props.children}</button>
}