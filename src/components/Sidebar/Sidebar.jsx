import './Sidebar.css'

const Sidebar = ({createNewProject, isCreating}) => {
  return (
    <aside className='sidebar-component'>
      <h2>Your Projects</h2>
      <button disabled={isCreating} onClick={createNewProject}>create new project</button>
    </aside>
  )
}

export default Sidebar