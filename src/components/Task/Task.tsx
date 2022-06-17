import { FC, useState } from "react"
import {
    PencilLine,
    Trash,
    CaretDown,
    CaretUp,
    CheckCircle,
} from "phosphor-react"

import "./Task.css"

export interface TaskProps {
    id: number
    title: string
    description: string
    isDescVisible: boolean
    deleteTask: Function
    changeDescVisible: Function
    showTaskForm: Function
}

const Task: FC<TaskProps> = ({
    id,
    title,
    description,
    isDescVisible,
    deleteTask,
    changeDescVisible,
    showTaskForm,
}) => {
    const [task_finished, setTaskFinished] = useState<boolean>(false)

    const handleTaskFinished = () => {
        if (task_finished) {
            setTaskFinished(false)
        } else {
            setTaskFinished(true)
        }
    }

    return (
        <div className={task_finished ? "task finished" : "task"}>
            <h2 className="task-title">{title}</h2>
            <div className="icons">
                <span className="task-icon" onClick={handleTaskFinished}>
                    <CheckCircle />
                </span>
                <span className="task-icon" onClick={() => showTaskForm(id)}>
                    <PencilLine />
                </span>
                <span className="task-icon" onClick={() => deleteTask(id)}>
                    <Trash />
                </span>
                <span
                    className="task-icon"
                    onClick={() => changeDescVisible(id)}>
                    {isDescVisible ? <CaretUp /> : <CaretDown />}
                </span>
            </div>
            <span className={isDescVisible ? "task-desc" : "hide"}>
                {description}
            </span>
        </div>
    )
}

export default Task
