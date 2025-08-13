import React, {useState} from 'react';
import '../css/About.css'

function About() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([])

  const handleChange =(e) => {
    setTask(e.target.value)
  }

  const handleAdd = () => {
    if(task.trim() ==='')
      return
    setTodos([...todos, task.trim()]);
    setTask('');
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_,i) => i !== index))
  }

  return (
    <div>
      <h2>간단한 할 일 목록</h2>
      <input 
      type="text"
      value={task}
      onChange={handleChange}
      placeholder='할 일을 입력하세요.' 
      />
      <button onClick={handleAdd}>추가</button>

      <ul>
        {todos.map((todo,index) =>(
          <li key={index}>
            {todo} <button onClick={() => handleDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About;