import './NoProjectSelected.css'

const NoProjectSelected = ({createNewProject}) => {
  return (
    <div className='no-project-selected-component'>
      <div className="element-container">
        <h2>Nothing to display</h2>
        <h3>Please select a project</h3>
        <h4>Or create a new one</h4>
        <button onClick={createNewProject}>create new project</button>
      </div>
    </div>
  )
}

export default NoProjectSelected