import { useState } from "react";


function FormNewTodo({addTodoAsAProp}) {

    const [newItem, setNewItem] = useState(""); 


    function handleSubmit (e) {  
        e.preventDefault() 

        if (newItem === "") return

        addTodoAsAProp(newItem) // we passed from App  as a prop


        setNewItem("") 

    }

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label htmlFor='connector-to-label'> New Item</label>
            <input type='text' id="connector-to-label" value={newItem} onChange={e => setNewItem(e.target.value)}></input> 
            </div>
            
            <button className="btn"> Add </button>
        </form>
    )
}

export default FormNewTodo;
