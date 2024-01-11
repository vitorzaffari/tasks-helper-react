import { useState } from 'react'
import './TaskContainer.css'

const TaskContainer = ({addTaskToProject, tasks}) => {
    const [taskInputValue, setTaskInputValue] = useState('')

    function handleAddTask(){
        if(taskInputValue.trim() === '') return
        addTaskToProject({name: taskInputValue})
        setTaskInputValue('')
    }


    return (
        <div className='task-container-component'>
            <h2>Tasks</h2>
            <div className="input-container">
                <input className='add-task-input' placeholder='Enter a task' type="text" value={taskInputValue} onChange={(e) => setTaskInputValue(e.target.value)}/>
                <button onClick={handleAddTask}>Add</button>
            </div>
            <div className='tasks-wrapper'>
                {tasks.map(task => (
                    <li className='single-task' key={task.id}>{task.name}</li>
                ))}
            </div>
        </div>
    )
}

export default TaskContainer