export default function ListItemTodo({
  style,
  key,
  todo,
  todosList,
  setTodos,
}) {
  const removeTodo = (todo) => {
    setTodos(todosList.filter((todoItem) => todoItem != todo));
    // alert(todo + " item is deleted from your to-do list");
  };
  return (
    <li key={key} className={style.todoItem}>
      {todo}
      <button
        className={style.removeBtn}
        type="button"
        onClick={() => removeTodo(todo)}
      >
        X
      </button>
    </li>
  );
}
