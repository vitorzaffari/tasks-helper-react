import './NewProjectForm.css'

const NewProjectForm = ({cancelProjectCreation}) => {
  return (
    <div className='new-project-form-component'>
        <div className='width-container'>
            
        <div className="buttons">
            <button onClick={cancelProjectCreation}>Cancel</button>
            <button className='confirm'>Confirm</button>
        </div>
        <div className="all-inputs">
            <div className="single-input-wrapper">
                <label htmlFor="title">title</label>
                <input type="text" name='title' id='title' placeholder='Project title'/>
            </div>
            <div className="single-input-wrapper">
                <label htmlFor="description">description</label>
                <textarea type="text" name='description' id='description' placeholder='Project description '/>
            </div>
            <div className="single-input-wrapper">
                <label htmlFor="due-date">due date</label>
                <input type="date" name='due-date' id='due-date' placeholder='Project due date'/>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default NewProjectForm