import { useState } from 'react'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import '../styles/task-list.scss'

interface Task {
    id: number,
    title: string,
    isCompleted: boolean
}

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTaskTitle, setNewTaskTitle] = useState('')

    function handleCreateNewTask() {
        if(newTaskTitle == '') {
            return
        }

        const newTask = {
            id: Math.random(),
            title: newTaskTitle,
            isCompleted: false
        }

        setTasks(oldState => [...oldState, newTask])
        setNewTaskTitle('')
    }

    function handleToggleTaskCompletion(id: number) {
        const completedTask = tasks.map(task => task.id == id ? {
            ...task,
            isCompleted: !task.isCompleted
        } : task)

        setTasks(completedTask)
    }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
    }

    return (
        <section className="task-list">
            <header className="tasks-header">
                <h2>Minhas Tasks</h2>

                <div className="input-group">
                    <input 
                    type="text" 
                    placeholder="Adicionar novo todo"
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    value={newTaskTitle} />

                    <button 
                    type="submit"
                    data-testid="add-task-button"
                    onClick={handleCreateNewTask}
                    className="button">
                        <FiCheckSquare size={16} color="#fff" />
                    </button>
                </div>
            </header>

            <section className="tasks-container">
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="task-card">
                            <div className={task.isCompleted ? 'completed' : ''} data-testid="task" >
                                <label className="checkbox-container">
                                    <input 
                                    type="checkbox"
                                    readOnly
                                    checked={task.isCompleted}
                                    onClick={() => handleToggleTaskCompletion(task.id)} />
                                    <span className="checkmark"></span>
                                </label>
                                <p>{task.title}</p>
                            </div>

                            <button 
                            type="button"
                            data-testid="remove-task-button"
                            onClick={() => handleRemoveTask(task.id)}
                            className="remove-task-button">
                                <FiTrash size="20" color="#e74c3c" className="trash-icon" />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}