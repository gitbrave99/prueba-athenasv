import { Dispatch, SetStateAction, createContext } from "react";
import { Task } from "../interfaces/Task.interface";

export interface TaskContextProps{
    task: Task,
    setTask:Dispatch<SetStateAction<Task>>
    resetTask:()=>void,
    manageNotificationVisibility(isVisible:boolean, title:string, description:string):void,
    idTask:number
    setIdTask:Dispatch<SetStateAction<number>>,

    isModalVisible:boolean,
    setIsModalVisible:Dispatch<SetStateAction<boolean>>,
    titleFormModal:string,
    setTitleFormModal: Dispatch<SetStateAction<string>>,

    isMdConfirmVisible:boolean,
    setIsMdConfirmVisible:Dispatch<SetStateAction<boolean>>,

    titleNotification:string,
    setTitleNotification:Dispatch<SetStateAction<string>>,

    isNotificationVisible:boolean,
    setIsNotificationVisible:Dispatch<SetStateAction<boolean>>,

    descriptionNotification:string,
    setDescriptionNotification:Dispatch<SetStateAction<string>>,
}

export const TaskContext = createContext<TaskContextProps>({} as TaskContextProps)