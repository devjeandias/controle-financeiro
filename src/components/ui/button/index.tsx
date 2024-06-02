function Button({...props}){
    return <button className={props.className}>{props.children}</button>
}

function ButtonEdit({...props}){
    return <button className={`uppercase text-green-600 ${props.className}`}>{props.children}</button>
}

function ButtonDel({...props}){
    return <button className={`uppercase text-red-600 ${props.className}`}>{props.children}</button>
}

const BTN = {
    button: ButtonDel,
    Del: ButtonDel,
    Edit: ButtonEdit
}

export default BTN