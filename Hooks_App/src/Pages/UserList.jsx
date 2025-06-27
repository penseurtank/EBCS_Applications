
import React from "react";
// import useFetch from "../Hooks/useFetch";
import { useCounter } from "../Hooks/useCounter";
// import Modal from './Modal';
// import { useState } from "react";

const UserList = () => {
    const { count, increment, decrement, reset } = useCounter(10);
    // const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
    // const [open, setOpen] = useState(false);
    return (
        <>

            <div>
                <h4>Hello Hooks</h4>
                <p>Count: {count}</p>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
                <button onClick={reset}>Reset</button>
            </div>

            {/* <div>
                <button onClick={() => setOpen(true)}>Open Modal</button>
                {open && (
                    <Modal>
                        <h2>This is a Portal Modal</h2>
                        <button onClick={() => setOpen(false)}>Close</button>
                    </Modal>
                )}
            </div> */}
        </>

    );
};

export default UserList;
