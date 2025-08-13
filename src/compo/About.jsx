import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/About.css'

function About() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleAdd = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: uuidv4(), text: task.trim(), completed: false }]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditText(todos[index].text)
  }

  const handleUpdate = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditIndex(null);
    setEditText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h3>할 일 목록</h3>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={handleAdd}>추가</button>
      <button onClick={() => setFilter('all')}>전체</button>
      <button onClick={() => setFilter('completed')}>완료</button>
      <button onClick={() => setFilter('incompleted')}>미완료</button>

      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>저장</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <button onClick={() => handleEdit(index)}>수정</button>
              </>
            )}
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About;