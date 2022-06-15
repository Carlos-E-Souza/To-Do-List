import { FC } from "react"
import { PencilLine, Trash, CaretDown, CaretUp } from "phosphor-react"

import "./Task.css"

export interface TaskProps {
    title: string
    description?: string
    isDescVisible: boolean
}

const Task: FC<TaskProps> = ({ title, description, isDescVisible }) => {
    return (
        <div className="task">
            <h2 className="task-title">{title}</h2>
            <div className="icons">
                <span className="task-icon">
                    <PencilLine />
                </span>
                <span className="task-icon">
                    <Trash />
                </span>
                <span className="task-icon">
                    {isDescVisible ? <CaretUp /> : <CaretDown />}
                </span>
                <span className={isDescVisible ? "task-desc" : "hide"}>
                    {description}
                </span>
            </div>
        </div>
    )
}

export default Task
