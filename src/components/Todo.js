import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


export default function Todo({ task, togelComblete, deletTodo, editTodo }) {
    return (
        <div className="todo">
            <p
                onClick={() => togelComblete(task.id)}
                className={`${task.completed ? "completed" : ""}`}
            >
                {task.task}
            </p>
            <div>
                <FaPenToSquare
                    className="i-icons"
                    onClick={() => {
                        editTodo(task.id);
                    }}
                />
                <FaTrash
                    className="trashicno i-icons"
                    onClick={() => deletTodo(task.id)}
                />
            </div>
        </div>
    );
}
