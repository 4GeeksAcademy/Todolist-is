import React, { useState } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>todos</h1>
      <div className="todo-box">
        <input
          type="text"
          placeholder="Agregar tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {todos.length === 0 ? (
          <p className="empty">No hay tareas, añadir tareas</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
          ))
        )}
        <div className="footer">{todos.length} item{todos.length !== 1 && 's'} left</div>
      </div>
    </div>
  );
}

export default App;
