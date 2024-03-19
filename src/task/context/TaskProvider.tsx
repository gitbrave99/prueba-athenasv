
import React, { useState } from 'react'
import { Task } from '../interfaces/Task.interface'
import { TaskContext, TaskContextProps } from './TaskContext'
 
interface ProductProviderProps{
    children:JSX.Element| JSX.Element[]
}

export const ProductProvider = ({children}:ProductProviderProps) => {

    const [task, setTask] = useState<Task>({} as Task)
    const [idTask, setIdTask] = useState<number>(0)

    const INITVALUES:TaskContextProps={
        task,
        setTask,
        idTask,
        setIdTask
    }
  return (
    <TaskContext.Provider value={INITVALUES}>
        {children}
    </TaskContext.Provider>
  )
}