function TodoItem({id, completed, title, handleTodo, deleteTodo}) {

    return (
        <li> 
            <label>
                <input 
                    type='checkbox' 
                    checked={completed} 
                    onChange={e => handleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button 
                className="btn btn-danger" 
                onClick={() => deleteTodo(id)}
                >
                Delete
            </button>
        </li>

    )

}

export default TodoItem;