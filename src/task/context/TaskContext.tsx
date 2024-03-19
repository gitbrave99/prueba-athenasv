import { Dispatch, SetStateAction, createContext } from "react";
import { Task } from "../interfaces/Task.interface";

export interface TaskContextProps{
    task: Task,
    setTask:Dispatch<SetStateAction<Task>>
    idTask:number
    setIdTask:Dispatch<SetStateAction<number>>
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)