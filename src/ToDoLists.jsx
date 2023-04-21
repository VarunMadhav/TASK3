import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoLists;
// https://fontawesome.com/v4/icon/times#:~:text=%3Ci%3E%20tag%3A-,Example%20of%20times,fa%2Dtimes,-%3Ci%20class%3D
