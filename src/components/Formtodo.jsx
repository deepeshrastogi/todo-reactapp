import { useState } from "react";
export default function formTodo({ style, setTodos, todosList }) {
  const [todo, setTodo] = useState("");
  const [todoIsEmpty, setTodoIsEmpty] = useState(true);
  const addTodo = (e) => {
    e.preventDefault();
    if (todo) {
      if (!todosList.includes(todo)) {
        setTodos([...todosList, todo]);
      } else {
        alert(todo + " item already exist in your to-do list");
      }
      setTodo("");
      setTodoIsEmpty(true);
    }
  };
  return (
    <>
      <form className={style.chatForm} onSubmit={addTodo}>
        <input
          type="text"
          className={style.inputTodo}
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            setTodoIsEmpty(false);
          }}
        />
        &nbsp;
        <button
          type="submit"
          className={style.btn_lg}
          disabled={todoIsEmpty ? "disabled" : ""}
        >
          +
        </button>
      </form>
    </>
  );
}
