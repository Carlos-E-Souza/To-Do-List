import { FC, useState, ChangeEvent } from "react"
import TaskForm from "../TaskForm/TaskForm"
import Task from "../Task/Task"

import "./TaskList.css"

interface TaskListProps {}

interface TaskInterface {
    id: number
    title: string
    description: string
    isDescVisible: boolean
}

const TaskList: FC<TaskListProps> = () => {
    const [task, setTask] = useState<TaskInterface>({
        id: 0,
        title: "",
        description: "",
        isDescVisible: false,
    })
    const [task_list, setTaskList] = useState<TaskInterface[]>([])

    const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
    const [form_task, setFormTask] = useState<TaskInterface>({
        id: 0,
        title: "",
        description: "",
        isDescVisible: false,
    })

    const addTask = ({ title, description, isDescVisible }: TaskInterface) => {
        const id = Math.random() * 10000
        const updatedList = [
            { id, title, description, isDescVisible },
            ...task_list,
        ]
        setTaskList(updatedList)
        setTask({
            id: 0,
            title: "",
            description: "",
            isDescVisible: false,
        })
    }

    const handleInputTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTask({ ...task, title: value })
    }

    const handleDeleteTask = (id: number) => {
        const updatedList = task_list.filter((task) => task.id !== id)
        setTaskList(updatedList)
    }

    const handleDescVisible = (id: number) => {
        const updatedList = task_list.map((task) => {
            if (id === task.id) {
                if (task.isDescVisible) {
                    task.isDescVisible = false
                } else {
                    task.isDescVisible = true
                }
            }
            return task
        })

        setTaskList(updatedList)
    }

    const handleTaskFormShow = (id: number) => {
        setIsFormVisible(true)
        const old_task = task_list.find((task) => task.id === id) || task
        setFormTask(old_task)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setFormTask({ ...form_task, title: value })
    }

    const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        setFormTask({ ...form_task, description: value })
    }

    const handleFormSubmit = (
        e: ChangeEvent<HTMLInputElement>,
        task_id: number
    ) => {
        e.preventDefault()

        setIsFormVisible(false)

        const updatedList = task_list.map((task) => {
            if (task.id === task_id) {
                task = form_task
            }
            return task
        })

        setTaskList(updatedList)
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
                    name="task_title"
                    placeholder="Note Your Task"
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && addTask(task)}
                />
                <button
                    type="submit"
                    className="submit-input-btn"
                    onClick={() => addTask(task)}>
                    Submit
                </button>
            </header>
            {isFormVisible ? (
                <TaskForm
                    task_id={form_task.id}
                    task_title={form_task.title}
                    task_desc={form_task.description}
                    onChangeTitle={handleTitleChange}
                    onFormSubmit={handleFormSubmit}
                    onChangeDesc={handleDescChange}
                    onCloseForm={() => setIsFormVisible(false)}
                />
            ) : (
                <ul className="tasks-list">
                    {task_list.map((task) => (
                        <li key={task.id} className="tasks-list-item">
                            <Task
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                isDescVisible={task.isDescVisible}
                                deleteTask={handleDeleteTask}
                                changeDescVisible={handleDescVisible}
                                showTaskForm={handleTaskFormShow}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default TaskList
