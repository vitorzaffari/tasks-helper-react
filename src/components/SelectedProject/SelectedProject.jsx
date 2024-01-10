import TaskContainer from '../TaskContainer/TaskContainer'
import './SelectedProject.css'

const SelectedProject = ({ projectData, deleteProject, addTaskToProject }) => {
    return (
        <section className='selected-project-component'>
            <div className='title-container'>
                <h4>{projectData.title}</h4>
                <button onClick={() => deleteProject(projectData.id)}>Delete</button>
            </div>
            <div>

                <p className='date'>{projectData.date}</p>
                <p className='description'>{projectData.description}</p>
            </div>
            <TaskContainer addTaskToProject={addTaskToProject} tasks={projectData.tasks} />
        </section>
    )
}

export default SelectedProject