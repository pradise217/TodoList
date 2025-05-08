import { useState } from "react";
import { Button } from "react-bootstrap";
import './App.css';

const Timer : React.FC =() => {
    const [seconds, setSeconds] = useState<number>(0);

    return (
        <div className = "board">
            <h4>타이머 : {seconds} 초</h4>
            <Button onClick={
                () => {
                    setInterval(()=>{
                        setSeconds((prevSeconds)=> {
                            return prevSeconds + 1
                        }
                    );
                    }, 1000);
                }
            }>시작</Button>
        </div>
    )
}

export default Timer;