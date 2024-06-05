import React, { useState } from 'react';
import './Calculate.css';

function Calculate(props) {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {
        const newResult = props.calculateFunction(input);
        setResult(newResult);
    };

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
