import { ChangeEventHandler, FC, useState } from "react"
import { PencilLine, Trash, CaretDown, CaretUp } from "phosphor-react"

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
    return (
        <div className="task">
            <h2 className="task-title">{title}</h2>
            <div className="icons">
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
                <p>{description}</p>
            </span>
        </div>
    )
}

export default Task
