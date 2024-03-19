import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'
import { Task } from '../interfaces/Task.interface'
import { TaskService } from '../services/TaskService'

export const AddTaskModal = ({onSubmit}:{onSubmit:(task:Task)=>Promise<void>}) => {

  const [task, setTask] = useState<Task>({} as Task)
  const onInputChange=(evt:ChangeEvent<HTMLInputElement>)=>{
    const {name, value}= evt.target;
    setTask((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }

  const submitForm=()=>{
    console.log("enviando", task);
    onSubmit(task)
  }

  const onSelectChange=(evt:ChangeEvent<HTMLSelectElement>)=>{
    const {name, value}= evt.target;
    setTask((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }





  return (
    <div className="modal fade" id="addTaskModal" tabIndex={-1} aria-labelledby="addTaskModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addTaskModalLabel">Add Task</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name"
                value={task.name} onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name='description'
                value={task.description} onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="duedate" className="form-label">Due date</label>
                <input type="date" className="form-control" id="duedate" name='duedate' 
                value={task.dueDate} onChange={onInputChange} />
              </div>

              <div className="mb-3">
                <label htmlFor="duedate" className="form-label">Status</label>
                <select className="form-select form-select-sm" required  name='status'
                value={task.status} onChange={onSelectChange}>
                  <option disabled>Select one</option>
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={submitForm}>Save</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
