import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {
  // so ab input wali jagae mei jo type karenge woh event.target.value se mil jaayegi
  // aur setinputlist se woh update karegi aur inputlist ie current jo hai value woh ban jaayegi
  // jo onChange se jab bhi ham kuch daalenge woh inputlist mei change laayega
  // aur <li> mei dikhayega.

  // but ab + press karne pe neeche toh aana hi chahiye but wapas kuch input karne pe
  // phir + dabane pe dusra wala input uske neeche aana chahiye
  // jiskle lie ham banayenge ek array jaha sab input store bhi ho aur
  // input neeche dikhe bhi so ye  sochke ham banayenge const items
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]); // ek empty array banaya jisme i/p store hoga

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.length === 0) {
      alert("plz enter the name of item!");
      return;
    }
    setItems((oldItems) => {
      // so usestate ke [] ko hamne items mei dia ek empty array jisme mapping karke one by one render kare sab input.
      return [...oldItems, inputList]; // PEHLE JITNE BHI SAB THE ARRAY MAI WOH TOH RETURN KARO HI BUT FIR LATEST JO INPUTLIST ie input daalenge WOH PURANE SABKE BAAD RETURN KARDO
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_body">
        <div className="center_body">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add something here"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {/* <li> {inputList} </li> */}
            {/* map ke 4->(currentval,currentvalkaindex,kaunsearrayse) */}
            {items.map((itemval, index) => {
              return (
                <ToDoLists
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
