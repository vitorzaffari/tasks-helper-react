import { useState } from "react"
import NewProjectForm from "./components/NewProjectForm/NewProjectForm"
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  const [projectsCurrentState, setProjectsCurrentState] = useState({
    allProjects: [],
    currentActiveProject: undefined
  })

    let content;
    if(projectsCurrentState.currentActiveProject == undefined) content = <NoProjectSelected createNewProject={createNewProject}/>
    else if(projectsCurrentState.currentActiveProject == 'creating') content = <NewProjectForm cancelProjectCreation={cancelProjectCreation}/>

    let isCreatingProject = projectsCurrentState.currentActiveProject === 'creating'



  function createNewProject() {
    setProjectsCurrentState(prev => ({
      ...prev,
      currentActiveProject: 'creating'
    }))
  }
  function cancelProjectCreation(){
    setProjectsCurrentState(prev => ({
      ...prev,
      currentActiveProject: undefined
    }))
  }

  return (
    <main>
      <Sidebar createNewProject={createNewProject} isCreating={isCreatingProject}/>
      {content}
    </main>
  )
}

export default App
