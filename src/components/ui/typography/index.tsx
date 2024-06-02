export function Title({...props}){
    return <h1 className={`text-4xl font-thin mb-5 ` + props.className }>{props.children}</h1>
}
export default Title