import style from "../css/chat.module.css";
import { useState } from "react";
import Formtodo from "./Formtodo";
import Listtodo from "./Listtodo";
import Notodo from "./Notodo";
export default function master() {
  const [todosList, setTodos] = useState([
    "woken up",
    "freshen up",
    "eat breakfast",
  ]);
  return (
    <>
      <Formtodo style={style} setTodos={setTodos} todosList={todosList} />
      {todosList.length > 0 ? (
        <Listtodo style={style} setTodos={setTodos} todosList={todosList} />
      ) : (
        <Notodo style={style} />
      )}
    </>
  );
}
