import React, { Component, useState } from 'react';
import Timer from './Timer';
import TodoList from './TodoList';

// 프롭스 타입 정의
interface GreetingProps{
  name:string;
  children : React.ReactNode;
}

interface ButtonProps {
  myClick : () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <button onClick={props.myClick}>Click me!</button>
    </div>
  )
};

const Greeting : React.FC<GreetingProps> = ({name, children}) => {
  // const {name, children} = props;
  // const [count, setCount] = useState<number>(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    // <div className='titlebk'>
      {/* <p>count : {count}</p> */}
      // <Button myClick={handleClick} />
    // </div>
    // <div>
    //   <h1>{name} 님. 반갑습니다.</h1>
    //   <h4>오늘의 날씨는 {children}</h4>
    // </div>
    // <TodoList></TodoList>
  )
}

// class Greeting extends Component<GreetingProps> {
//   render() {
//     return <h1>{this.props.name}님. 반갑습니다.</h1>;
//   }
// }

const App:React.FC = () => {
  return (
    <div className='titlebk'>
      {/* <Timer></Timer> */}
      {/* <TodoList></TodoList> */}
      {/* <Greeting name="지니자나">비</Greeting> */}
      <TodoList></TodoList>
    </div>
  )
}

export default App;