import { APIBASE } from "../../cofig/api/ApiBase"
import { FetchUtils } from "../../shared/utils/FetchUtils"
import { Task } from "../interfaces/Task.interface"

export class TaskService {
  
    static getListTask(status:string):Promise<Task[]>{
        return new Promise((resolve, reject)=>{
            FetchUtils.getData<Task[]>(`${APIBASE}/items?status=${status}`)
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static addTask(task:Task):Promise<Task>{
        return new Promise((resolve, reject)=>{
            FetchUtils.postData<Task>(`${APIBASE}/items`,task)
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static updateTask(id:number,task:Task):Promise<Task>{
        return new Promise((resolve, reject)=>{
            FetchUtils.putData<Task>(`${APIBASE}/items/${id}`,task)
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

    static deleteTask(id:number):Promise<string>{
        return new Promise((resolve, reject)=>{
            FetchUtils.deleteData<string>(`${APIBASE}/items/${id}`)
            .then(data=>resolve(data))
            .catch(error=>reject(error))
        })
    }

}
