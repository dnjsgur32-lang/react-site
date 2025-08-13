import React from 'react';

function Work1() {
  const userName = '이정현'
  const todoList = []

  const handleClick = () => {
    alert('버튼이 클릭되었습니다!')
  }

  return (
    <div>
      <h2>Work1 페이지</h2>
      <p>여기는 Work1 컴포넌트입니다.</p>
      <p>안녕하세요, {userName}님 !</p>

      <button onClick={handleClick}>클릭해보세요.</button>

      <h3>할 일 목록</h3>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Work1;