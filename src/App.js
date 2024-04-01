import React, {useState} from 'react';
import TodoList from './TodoList';

function App() {
  const [currTodos, updateTodos] = useState(["Todo 1"])
  return (
    <div>
      <TodoList todoItems = {currTodos} />
      <input type="text" />
      <button>Add item</button>
      <button>Clear To do List</button>
      <button>0 things to do</button>
    </div>
  )
}

export default App;
