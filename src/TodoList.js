import TodoItem from "./TodoItem";

function TodoList({todos, handleTodo, deleteTodo}) {

    return (
        <ul className="list">

            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem 
                    {...todo} // this will pass all the props of the todo properties: 
                    // id={todo.id} 
                    // completed={todo.completed} 
                    // title={todo.title}
                    key={todo.id} 
                    handleTodo={handleTodo}
                    deleteTodo={deleteTodo}
                    />
                )
            })}

        </ul>

    )

}

export default TodoList;

// COMMENTS
// Passing todo.id BOTH as id and key because we are rendering this inside an array 
// which will be expressed in li children and we dont want to get the children error
// PLUS we dont want to use the index of an array for this