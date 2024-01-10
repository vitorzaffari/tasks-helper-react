import './Sidebar.css'

const Sidebar = ({createNewProject, isCreating, allProjects, selectProject}) => {
  return (
    <aside className='sidebar-component'>
      <h2>Your Projects</h2>
      <button disabled={isCreating} onClick={createNewProject}>create new project</button>
      <div className="projects-list">
        {allProjects.map(item => (
          <li className='sidebar-project-title' key={item.id} onClick={() => selectProject(item.id)}>
            <p>{item.title}</p>
          </li>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar