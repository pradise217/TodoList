import React, {Component, useState} from 'react';
import './App.css';
import TodoList from "./TodoList"

const App:React.FC = () => {
  return (
     <div className='titlebk'>
       <TodoList></TodoList>
     </div>
  );
}

export default App;




