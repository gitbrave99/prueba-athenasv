import { ChangeEvent, FormEvent, useContext } from 'react'
import { Task } from '../interfaces/Task.interface'
import { TaskContext } from '../context/TaskContext'
import { TaskService } from '../services/TaskService'

interface FormModalComponentProps {
  onLoadTask: () => Promise<void>,
  title: string
}

export const FormTaskModalComponent = ({ onLoadTask, title }: FormModalComponentProps) => {

  const { task, setTask, isModalVisible, setIsModalVisible,
    resetTask, manageNotificationVisibility } = useContext(TaskContext)

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (task.id > 0) {
      onUpdateTask()
      return;
    }
    onSaveTask(task);
    onLoadTask()
    resetTask()
  }


  async function onSaveTask(task: Task) {
    try {
      const result = await TaskService.addTask(task);
      if (result.id > 0) {
        onLoadTask().then(() => {
          setIsModalVisible(false)
          manageNotificationVisibility(true, "Adding", `Task has been added ${result.name}`)
        })
        return
      }
      manageNotificationVisibility(true, "Error Adding", `Opps cannot add`)
      console.log("results", result);
    } catch (error) {
      manageNotificationVisibility(true, "Error updating", "Opps " + error)
    }
  }

  async function onUpdateTask() {
    try {
      const result = await TaskService.updateTask(task.id, task);
      console.log("response update ", result);
      if (result.id > 0) {
        onLoadTask().then(() => {
          setIsModalVisible(false)
          manageNotificationVisibility(true, "Updated", `Task has been updated ${result.name}`)
        })
        return
      }
      manageNotificationVisibility(true, "Error updating", `Opps cannot update`)
    } catch (error) {
      console.log("error ", error);
      manageNotificationVisibility(true, "Error updating", "Opps " + error)
    }
  }

  const onSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = evt.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className={`modal fade ${isModalVisible ? "show" : ""}`} style={{ "display": isModalVisible ? "block" : "none" }}
      id="addTaskModal" tabIndex={-1} aria-labelledby="addTaskModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addTaskModalLabel">{title}</h1>
            <button type="button" className="btn-close" onClick={() => setIsModalVisible(false)}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={submitForm} method='POST'>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' id="name" required
                  value={task.name} onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name='description' required
                  value={task.description} onChange={onInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select form-select-sm" name='status' required
                  value={task.status} onChange={onSelectChange}>
                  <option value={""} disabled>Select one</option>
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due date</label>
                <input type="date" className="form-control" id="duedate" name='dueDate' required
                  value={task.dueDate} onChange={onInputChange} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalVisible(false)}>Close</button>
                <button type="submit" className="btn btn-primary">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
