import { useRef } from 'react'
import './NewProjectForm.css'

const NewProjectForm = ({ cancelProjectCreation, saveNewProject }) => {

    const titleRef = useRef()
    const descriptionRef = useRef()
    const dateRef = useRef()

    function getAllInputs() {
        let title = titleRef.current.value;
        let description = descriptionRef.current.value;
        let date = dateRef.current.value;
        let formattedDate
        if(date){
            const [year, month, day] = date.split('-')
            formattedDate = `${day}/${month}/${year}`
        }
        if (title.trim() === '') title = 'Project'
        if (description.trim() === '') description = 'No description provided'
        if (date.trim() === '') formattedDate = new Date().toLocaleDateString();
        const newProject = {
            title,
            description,
            date: formattedDate
        }
        saveNewProject(newProject);
    }

    return (
        <div className='new-project-form-component'>
            <div className='width-container'>

                <div className="buttons">
                    <button onClick={cancelProjectCreation}>Cancel</button>
                    <button className='confirm' onClick={getAllInputs}>Confirm</button>
                </div>
                <div className="all-inputs">
                    <div className="single-input-wrapper">
                        <label htmlFor="title">title</label>
                        <input ref={titleRef} type="text" name='title' id='title' placeholder='Project title' />
                    </div>
                    <div className="single-input-wrapper">
                        <label htmlFor="description">description</label>
                        <textarea ref={descriptionRef} type="text" name='description' id='description' placeholder='Project description ' />
                    </div>
                    <div className="single-input-wrapper">
                        <label htmlFor="due-date">due date</label>
                        <input ref={dateRef} type="date" name='due-date' id='due-date' placeholder='Project due date' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewProjectForm