import { XCircle } from "phosphor-react"
import { ChangeEventHandler, FC } from "react"

import "./TaskForm.css"

interface TaskFormProps {
    task_id: number
    task_title: string | undefined
    task_desc: string | undefined
    onChangeTitle: ChangeEventHandler<HTMLInputElement>
    onChangeDesc: ChangeEventHandler<HTMLTextAreaElement>
    onFormSubmit: Function
    onCloseForm: Function
}

const TaskForm: FC<TaskFormProps> = ({
    task_id,
    task_title,
    task_desc,
    onChangeTitle,
    onChangeDesc,
    onFormSubmit,
    onCloseForm,
}) => {
    return (
        <div className="form">
            <header className="form-header">
                <h2 className="form-title">Edit To-Do</h2>
                <XCircle
                    className="form-close-icon"
                    onClick={() => onCloseForm()}
                />
            </header>
            <form className="task-form">
                <input
                    type="text"
                    placeholder="To Do Title"
                    className="form-input-title"
                    value={task_title}
                    onChange={onChangeTitle}
                />
                <textarea
                    name="task_desc"
                    className="input-desc"
                    value={task_desc}
                    onChange={onChangeDesc}></textarea>
                <button
                    type="submit"
                    className="form-submit-btn"
                    onClick={(e) => onFormSubmit(e, task_id)}>
                    Save ToDo
                </button>
            </form>
        </div>
    )
}

export default TaskForm
