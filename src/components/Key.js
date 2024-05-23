function Key(props){
    return (
        <button className={'keyR ' +props.keyClassName} id={props.keyIdName}>
        {props.keyValue}
        </button>
    )
}
export default Key;