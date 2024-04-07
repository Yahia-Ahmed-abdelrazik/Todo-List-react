import React from "react";
import { useState } from "react";

export default function EditTodoForm({ editTodo,task }) {
    const [value, setValue] = useState(task.task);

    const handelSubmit = (e) => {
        e.preventDefault();
        editTodo(value,task.id);
        setValue("");
    };
    return (
        <form className="todoForm" onSubmit={handelSubmit}>
            <input
                type="text"
                className="todoInput"
                placeholder="Updat Task "
                onChange={(event) => setValue(event.target.value)}
                value={value}
            ></input>
            <button className="todo-btn" type="submit">
                Updat Task
            </button>
        </form>
    );
}
