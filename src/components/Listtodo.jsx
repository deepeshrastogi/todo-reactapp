import ListItemTodo from "./ListItemTodo";
export default function listTodo({ style, todosList, setTodos }) {
  return (
    <>
      <div className={style.todoSection}>
        To Do list
        <ul className={style.todosList}>
          {todosList.map((todo, index) => (
            <ListItemTodo
              style={style}
              key={index}
              todo={todo}
              todosList={todosList}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
