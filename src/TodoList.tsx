import { useState } from "react";
import './App.css';
import Timer from "./Timer";
import Clock from "./Clock";
import {Modal, Button} from 'react-bootstrap';
import TodoModal from "./TodoModal";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

const TodoList : React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id:1, text : 'react', isChecked:false},
        {id:2, text : 'python', isChecked:false},
        {id:3, text : 'coffee', isChecked:false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    // event
    const handleCheckboxChange = (itemId:number) => {
        setTodos((prevItems) =>
             prevItems.map((item) =>
             item.id === itemId ? {...item, isChecked : !item.isChecked } : item
             )
        );
        console.log('wow');
    }

    // add button
    const addTodo =() => {
        if(newTodo.trim() !== '') {
            setTodos([
                ...todos,
                {id:Date.now(), text: newTodo, isChecked:false}
            ]);
            setNewTodo('');
        }
    }

    // remove button
    const removeTodo = (id:number) => {
        setTodos(todos.filter((todo)=> {
            return todo.id !== id;
        }))
    }

    //Modal event
    const handleTodoClick = (todo: Todo) => {
        setSelectedTodo(todo);
        setShowDetail(true);
    }

    const handleCloseDetail =() => {
        setShowDetail(false);
    }

    return (
        <div className = "container mt-5">
            <h1 className='titlebk'>오늘 할일</h1>
            {/* todo 추가 start */}
            <div className="form-group d-flex align-items-conter mb-3">
                <input 
                    type="text"
                    className="form-control me-2"
                    placeholder="할일 입력"
                    onChange={(e)=>setNewTodo(e.target.value)}
                    value={newTodo}
                    style={{writingMode:"horizontal-tb"}}
                />
                <button className="btn btn-success" onClick={addTodo} style={{whiteSpace:'nowrap'}}>
                    추가하기
                </button>
            </div>
            {/* todo 추가 end */}
            {/* todo 삭제 start */}
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {todos.map((todo)=> (
                            <li key={todo.id}
                            className="list-group-item d-flex
                            justify-content-between align-items-center">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" checked={todo.isChecked}
                                    onChange={() => handleCheckboxChange(todo.id)}/>
                                    <label className="form-check-label">
                                        {
                                            todo.isChecked 
                                                ? <del>{todo.text}</del>
                                                : <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>
                                        }
                                    </label>
                                </div>
                                <button className="btn btn-danger"
                                        onClick={() => removeTodo(todo.id)}>삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div><br></br>
            {/* todo 삭제 end */}
            {/* 모달 대화상자 start */}
            {/* <Modal show={showDetail} onHide={handleCloseDetail} centered>
                <Modal.Header closeButton>
                    <Modal.Title>상세정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    자세한 정보를 출력합니다
                    <p>현재날짜 : {new Date().toLocaleDateString()}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo}/>
            {/* 모달 대화상자 end */}
            {/* <Timer></Timer> */}
            <Clock></Clock>
        </div>
    )

} 

export default TodoList;