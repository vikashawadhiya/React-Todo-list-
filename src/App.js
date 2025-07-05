import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setTasks([...tasks, { text: trimmedInput, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // 🔧 Fixed: Correct index
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, i) => (
          <li key={i} style={{ margin: '8px 0' }}>
            <span
              onClick={() => toggleComplete(i)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
