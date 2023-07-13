import { useEffect, useState } from 'react';
import './styles.css';
import FormNewTodo from './FormNewTodo';
import TodoList from './TodoList';

function App() {

  function addTodo(title) {
    setTodos((currentTodos) => { 
        return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
    })

  }

  // get data from local storage
  const [todos, setTodos] = useState(() => {          
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return []

    return JSON.parse(localValue)
  })


 // save in local storage
  useEffect(() => {  
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])



  // Checkbox 
  function handleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (id == todo.id) {
          return {...todo, completed} 
        } 
        return todo; 
      })
    })
  }


  // delete button 
  function deleteTodo (id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }





  return (
    <>
      <FormNewTodo addTodoAsAProp={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} handleTodo={handleTodo} deleteTodo={deleteTodo}></TodoList>
    </>
  );
}





export default App;


// Comments:

// Files have to start in capital leters

// need to pass the props along every single component in between

// LABELS: IMPORTANT elements! they connect text with form controls (<input>, <textarea>, <select>) 
//          so that screen readers and mobiles can use them properly. 
//          they connect to their form control element through the htmlFor="xxxxx" sharing name with the form control id="xxxxx"
//     labels are not like headings with a htmlFor. h1, h2, h3, and h4 structureand organise the content of a webpage



// USESTATE()
    //useState to handle the text input: by passing the input text as a parameter in the setNewItem functtion, 
    //it will update the value of the variable newItem. 
    //Like this under the hood:
    // setNewItem("input Text")
    // HOW or WHY? Because we are destructuring. So useState() returns a variable and a funciton.

// Get random ids:
    // id: crypto.randomUUID()
    // don't use the index of the element in the array cause can mess up everything if there are changes

// LINE 39
    // return { ...todo, completed } within curly braces to create a new object (cause a todo is an object) that combines the properties of 
    //the existing todo object with the updated completed property.
