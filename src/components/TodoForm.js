import React, {useState, useEffect, useRef} from "react";

function TodoForm(props) {
    const[input, setInput] = useState("");

    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

    const changeHandler = (e) => {
        setInput(e.target.value)
    };
    const submitHandler = (e) => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput("")
    }

    return(
        <form className="todo-form" onSubmit={submitHandler}>
            <input 
            type="text" 
            placeholder="Add todo" 
            value={input} 
            name="text" 
            className="todo-input" 
            onChange={changeHandler} 
            ref={inputRef}
            />
            <button className="todo-button"> Add todo</button>
        </form>
    )
}

export default TodoForm;