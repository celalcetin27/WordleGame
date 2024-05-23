function Box(props) {
  return (
    <div className={"board-row " +props.nameClass } id={props.rowKeyNo}>
      {props.rowKey}
    </div>
  );
}
export default Box;
