import { FC, useState, ChangeEventHandler, ChangeEvent } from "react"
import Task, { TaskProps } from "../Task/Task"

import "./TaskList.css"

interface TaskListProps {}

const TaskList: FC<TaskListProps> = () => {
    const [task, setTask] = useState<TaskProps>({
        title: "",
        description: "",
        isDescVisible: false,
    })
    const [task_list, setTasks] = useState<TaskProps[]>([])

    const addTask = ({ title, description, isDescVisible }: TaskProps) => {
        const new_task_list = [
            { title, description, isDescVisible },
            ...task_list,
        ]
        setTasks(new_task_list)
        setTask({ title: "", description: "", isDescVisible: false })
    }

    const handleInputTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTask({ title: value, isDescVisible: false })
    }

    return (
        <div className="tasks-container">
            <h1 className="tasks-container-title">
                What's the Plan for Today ?
            </h1>
            <header className="tasks-container-header">
                <input
                    value={task.title}
                    onChange={handleInputTaskTitle}
                    className="task-input"
                    type="text"
                    name="title"
                    id="input_task_title"
                    placeholder="Note Your Task"
                    autoFocus
                    enterKeyHint="next"
                />
                <button
                    type="submit"
                    className="submit-input-btn"
                    onClick={() => addTask(task)}>
                    Submit
                </button>
            </header>
            <ul className="tasks-list">
                {task_list.map((task) => (
                    <li key={task.title} className="tasks-list-item">
                        <Task
                            title={task.title}
                            description={task.description}
                            isDescVisible={task.isDescVisible}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList
