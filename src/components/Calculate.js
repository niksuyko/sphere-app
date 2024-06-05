import React, { useState } from 'react';
import './Calculate.css';


//calculate cards
function Calculate(props) {

    //state management
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    //handle calculate when button is clicked
    const handleCalculate = () => {
        const newResult = props.calculateFunction(input);
        setResult(newResult);
    };

    //return jsx
    return (
        <div className="container">
            <h1 className="main-title">{props.name}</h1>
            <h3 className="input-type">{props.input}</h3>
            <input
                type="number"
                className="input-bar"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="submit-btn" onClick={handleCalculate}>calc</button>
            <h3 className="result">{result}</h3>
        </div>
    );
}

export default Calculate;
