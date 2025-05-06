import { useState } from 'react';
import './App.css';
import {Modal, Button} from 'react-bootstrap';
import TodoModal from './TodoModal';


type Todo = {
    id: number;
    text : string;
    isChecked : boolean;
}
    
const TodoList : React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id:1, text:"react",isChecked:false},
        {id:2, text:"python",isChecked:false},
        {id:3, text:"spark",isChecked:false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckboxChange = (itemId : number)=> {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, ischecked:!item.isChecked} : item
            )
            
        );
    }

    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([
                ...todos,
                {id:Date.now(), text:newTodo, isChecked:false}
            ]);
            setNewTodo('');
        }
    }

    const removeTodo = (id:number) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }

    const handleTodoClick = (todo:Todo) => {
        setSelectedTodo(todo);
        setShowDetail(true);
    }

    const handleCloseDetail =() => {
        setShowDetail(false);
    }

    return (
        <div className='container mt-5'>
            <h1 className='titlebk'>오늘 할일</h1>

            <div className='form-group' style={{display:'flex', alignItems:'center',marginBottom:'20px'}}>
                <input  
                    type='text'
                    className="form-control"
                    placeholder="할일 입력"
                    value={newTodo}
                    onChange = {(e)=>setNewTodo(e.target.value)}
                    style={{marginRight:'10px',writingMode:'horizontal-tb'}}
                    />
                <Button className='btn btn-success' onClick={addTodo} style={{ whiteSpace:'nowrap'}}>
                    추가하기
                </Button>
            </div>
<div>
    <span>test</span>
    {
        todos.map((todo)=>(
            <li key={todo.id}>
                <input type="checkbox"
                       onChange={()=>{
                        console.log("체크 박스 상태 변경");
                       }}>
                </input>
                <span>{todo.text}</span>
            </li>
        ))
    }
</div>
            <div className='card'>
                <div className='card-body'>
                    <ul className='list-group'>
                        {todos.map((todo) => (
                            <li key={todo.id}
                                className='list-group-item d-flex
                                justify-content-between align-items-center'
                                style={{fontSize:"1rem"}}
                                >
                                    <div className='form-check'>
                                        <input type="checkbox"
                                               className='form-check-input'
                                               checked={todo.isChecked}
                                               onChange={()=>handleCheckboxChange(todo.id)}
                                               />
                                        <label className='form-check-label'>
                                            {
                                                todo.isChecked
                                                ? <del>{todo.text}</del>
                                                : <span onClick={()=>handleTodoClick(todo)}>{todo.text}</span>
                                            }
                                        </label>
                                    </div>
                                    <button className='btn btn-danger'
                                            onClick={()=>removeTodo(todo.id)}>삭제</button>
                                </li>
                        ))}
                    </ul>
                </div>
            </div><br></br>
            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo}/>

        </div>
    )
}

export default TodoList;