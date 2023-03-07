import { useState } from "react";

// custome hook which update the counter value;
function useCounter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return { counter, increment, decrement };
}

export default useCounter;
