import React, { useState, useEffect } from 'react';

const CountBack = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);

            // Cleanup the interval on component unmount or when count changes
            return () => clearInterval(timer);
        }
    }, [count]);

    return (
        <div style={styles.container}>
            <h1 style={styles.counter}>{count}</h1>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
    },
    counter: {
        fontSize: '100px',
        color: '#333',
    }
};

export default CountBack
