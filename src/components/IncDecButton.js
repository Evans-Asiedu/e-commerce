import React, { useState } from "react";
import './IncDecButton.css';

const IncrementDecrementButton = ({ minValue = 0, maxValue = 100 }) => {
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <div className="increment-decrement">
            <button
                className="increment-decrement__button"
                onClick={handleDecrementCounter}
                disabled={count === minValue}
            >
                <span className="material-symbols-outlined">remove</span>
            </button>
            <p className="increment-decrement__quantity">{count}</p>
            <button
                className="increment-decrement__button"
                onClick={handleIncrementCounter}
                disabled={count === maxValue}
            >
                <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
};

export default IncrementDecrementButton;