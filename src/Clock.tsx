import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        const setIntervalId = setInterval(()=> {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(setIntervalId);
        }
    }, []);

    return(
        <div className="board">
            <Row className="justify-content-center mt-4">
                <Col xs={10} md={8} lg={6}>
                    <div className="border p-3 rounded mb-4">
                        <h4>날씨 예보</h4>
                        <p>현재 날씨 : 비, 19'C</p>
                        <h4>현재 시각</h4>
                        <p>{time.toLocaleTimeString()}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Clock;