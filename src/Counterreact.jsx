import { useState } from "react"

export default function Counter() {

    const [count, setstate] = useState(0);

    const incresstogle = () => {
        const newcount = count + 1;
        setstate(newcount);
    }
    const decresstogle = () => {
        const newcount = count - 1;
        setstate(newcount);
    }

    return (
        <div style={{
            border: '2px solid black',
            padding: '10px',
            gap: "20px",
            display: "grid",

        }}>
            <h1>{count}</h1>
            <button onClick={incresstogle}>incress </button>
            <button onClick={decresstogle}>decress</button>


        </div >
    )

}