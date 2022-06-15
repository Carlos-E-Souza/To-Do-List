import { FC, useState } from "react"
import { TaskProps } from "../Task/Task"

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
    }

    return (
        <div className="task-list">
            <input
                type="text"
                name="task_title"
                id="task_title"
                placeholder="Note Your Task"
                value={task.title}
            />
            <button type="submit" onClick={() => addTask(task)}></button>
        </div>
    )
}

export default TaskList
