import  { useContext } from 'react'
import { Task } from '../interfaces/Task.interface'
import { TaskContext } from '../context/TaskContext'

interface CardItemProps {
  task: Task,
  color?: string
}


export const CardItemComponent = ({ task, color }: CardItemProps) => {
  const { setTask, setIdTask, setIsModalVisible, setTitleFormModal, setIsMdConfirmVisible } = useContext(TaskContext)

  function onSelectTask(task: Task) {
    task.dueDate = task.dueDate.slice(0, 10)
    setTask(task);
    setIsModalVisible(true);
    setTitleFormModal("Edit Task")
  }

  function onSelectToDelete(id: number) {
    setIdTask(id);
    setIsMdConfirmVisible(true)
  }


  const badgeColor = "badge text-bg-" + color
  return (
    <div className="card m-2" key={task.id}>
      <div className="card header">
        <h5 className="card-title p-1">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6>{task.name}</h6>
            </div>
            <div>
              <span className={badgeColor}>{task.status}</span>
            </div>
          </div>
        </h5>
      </div>
      <div className="card-body">
        {task.dueDate}
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center">
          <div className="btn-group-sm" role="group" >
            <button type="button" className="btn btn-warning" onClick={() => onSelectTask(task)}>
              <i className="bi bi-pencil"></i>
            </button>
            <button type="button" className="btn btn-danger" onClick={() => (onSelectToDelete(task.id))}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
