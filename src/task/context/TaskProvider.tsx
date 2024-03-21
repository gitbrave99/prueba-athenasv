
import  { useState } from 'react'
import { Task } from '../interfaces/Task.interface'
import { TaskContext, TaskContextProps } from './TaskContext'

interface TaskProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const TaskProvider = ({ children }: TaskProviderProps) => {

  const [task, setTask] = useState<Task>({
    id: 0,
    name: "",
    description: "",
    status: '',
    creationDate: "",
    dueDate: ""
  } as Task)

  const [idTask, setIdTask] = useState<number>(0)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isMdConfirmVisible, setIsMdConfirmVisible] = useState<boolean>(false)
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false)
  const [titleFormModal, setTitleFormModal] = useState<string>("Add Task")
  const [titleNotification, setTitleNotification] = useState<string>("Add Task")
  const [descriptionNotification, setDescriptionNotification] = useState<string>("Add Task")

  const resetTask=()=>{
    setTask({
      creationDate:"",
      description:"",
      dueDate:"",
      id:0,
      name:"",
      status:"todo"
    })
  }

  function manageNotificationVisibility(isVisible:boolean, title:string, description:string) {
    setIsNotificationVisible(false);
    setTitleNotification(title)
    setIsNotificationVisible(isVisible);
    setDescriptionNotification(description)
  }


  const INITVALUES: TaskContextProps = {
    task,setTask,
    resetTask,
    manageNotificationVisibility,
    idTask,setIdTask,
    isModalVisible, setIsModalVisible,
    titleFormModal, setTitleFormModal,
    titleNotification, setTitleNotification,
    descriptionNotification, setDescriptionNotification,
    isNotificationVisible, setIsNotificationVisible,
    isMdConfirmVisible, setIsMdConfirmVisible
  }
  return (
    <TaskContext.Provider value={INITVALUES}>
      {children}
    </TaskContext.Provider>
  )
}