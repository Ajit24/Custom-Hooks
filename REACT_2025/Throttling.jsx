//  Write a snippet to explain Throttling

//How Throttling Works
// When a throttled function is called,
// it runs immediately if it hasn’t been called within the specified time interval. 
//If it is called again before that interval is over, it will not run until the interval has elapsed. 
//This is useful for scenarios where you want to limit how often an action occurs, such as during scrolling or resizing events.





import React, { useEffect, useState } from 'react';

const ThrottledScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const throttle = (func, limit) => {
        let lastFunc;
        let lastRan;

        return function() {
            const context = this;
            const args = arguments;

            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(() => {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    };

    useEffect(() => {
        const throttledScroll = throttle(handleScroll, 100); // 100ms throttle

        window.addEventListener('scroll', throttledScroll);
        
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, []);

    return (
        <div>
            <h1>Scroll Position: {scrollPosition}</h1>
            <div style={{ height: '2000px', background: '#f0f0f0' }}>
                Scroll down to see the effect.
            </div>
        </div>
    );
};

export default ThrottledScroll;