import React from "react";
import { useState } from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('')
    };
    return (
        <form className="todoForm" onSubmit={handelSubmit}>
            <input
                type="text"
                className="todoInput"
                placeholder="What Is The Task Today ?"
                onChange={(event) => setValue(event.target.value)}
                value={value}
            ></input>
            <button className="todo-btn" type="submit">
                Add Task
            </button>
        </form>
    );
}
