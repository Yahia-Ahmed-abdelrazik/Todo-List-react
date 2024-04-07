import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos);
    };
    const togelComblete=(id) =>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    const deletTodo = (id) =>{
        setTodos(todos.filter(todo=>todo.id !==id))
    }
    const editTodo = (id)=>{
        setTodos(todos.map(todo=>todo.id===id?{todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask =(task,id)=>{
        setTodos(todos.map(todo=>todo.id ===id ?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    return (
        <>
            <div className="todoWrapper">
                <h1>Do What You Suposto!</h1>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) =>
                    todo.isEditing ? (
                        <EditTodoForm  editTodo={editTask} task={todo}/>
                    ) : (
                        <Todo
                            task={todo}
                            key={index}
                            togelComblete={togelComblete}
                            deletTodo={deletTodo}
                            editTodo={editTodo}
                        />
                    )
                )}
            </div>
        </>
    );
}
