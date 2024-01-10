import { useState } from "react"
import NewProjectForm from "./components/NewProjectForm/NewProjectForm"
import NoProjectSelected from "./components/NoProjectSelected/NoProjectSelected"
import Sidebar from "./components/Sidebar/Sidebar"
import SelectedProject from "./components/SelectedProject/SelectedProject"

function App() {
  const [projectsCurrentState, setProjectsCurrentState] = useState({
    allProjects: [],
    currentActiveProject: undefined
  })

  let content;
  
  if (projectsCurrentState.currentActiveProject == undefined) content = <NoProjectSelected createNewProject={createNewProject} />

  else if (projectsCurrentState.currentActiveProject == 'creating') content = <NewProjectForm cancelProjectCreation={cancelProjectCreation} saveNewProject={saveNewProject} />

  else{
    const projectData = projectsCurrentState.allProjects.find(proj => proj.id === projectsCurrentState.currentActiveProject)
    content = <SelectedProject projectData={projectData} deleteProject={deleteProject} addTaskToProject={addTaskToProject}/>
  }

  let isCreatingProject = projectsCurrentState.currentActiveProject === 'creating'

  function createNewProject() {
    setProjectsCurrentState(prev => ({
      ...prev,
      currentActiveProject: 'creating'
    }))
  }

  function cancelProjectCreation() {
    setProjectsCurrentState(prev => ({
      ...prev,
      currentActiveProject: undefined
    }))
  }

  function saveNewProject(projectData) {
    const newProject = {
      ...projectData,
      id: new Date().getTime(),
      tasks: []
    }

    const newProjectsArray = [newProject, ...projectsCurrentState.allProjects]

    setProjectsCurrentState(({
      currentActiveProject: undefined,
      allProjects: newProjectsArray
    }))

    console.log(newProject)
  }

  function deleteProject(id){
    const newStatus = projectsCurrentState.currentActiveProject === id ? undefined : id

    const newProjectsArray = projectsCurrentState.allProjects.filter(proj => proj.id != id);

    setProjectsCurrentState(({
      currentActiveProject: newStatus,
      allProjects: newProjectsArray
    }));
  }

  function selectProject(id){
    setProjectsCurrentState(prev => {
      return ({
        ...prev,
        currentActiveProject: id
      }
      )
    })
  }

  function addTaskToProject(taskData){
    const newTask = {
      ...taskData,
      id: new Date().getTime()
    }
    const curProj = projectsCurrentState.allProjects.find(proj=> proj.id === projectsCurrentState.currentActiveProject)
    if(!curProj) return;
    curProj.tasks = [newTask, ...curProj.tasks]
    const updatedProjects = [...projectsCurrentState.allProjects]
    setProjectsCurrentState(prev => ({
      ...prev,
      allProjects: updatedProjects
    }))
  }


  return (
    <main>
      <Sidebar createNewProject={createNewProject} isCreating={isCreatingProject} allProjects={projectsCurrentState.allProjects} selectProject={selectProject}/>
      {content}
    </main>
  )
}

export default App
