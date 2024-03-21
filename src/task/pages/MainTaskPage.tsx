import { useEffect, useState } from 'react'
import { CardListTaskComponent } from '../components/CardListTaskComponent'
import { TaskService } from '../services/TaskService'
import { Task } from '../interfaces/Task.interface'

import { TaskProvider } from '../context/TaskProvider'
import { HelperComponent } from '../components/HelperComponent'
import { HeaderComponent } from '../components/HeaderComponent'
import { SideBarShareComponent } from '../../shared/components/SideBarShareComponent'

export const MainTaskPage = () => {

  const [listTaskTodo, setListTaskTodo] = useState<Task[]>([])
  const [listTaskDoing, setListTaskDoing] = useState<Task[]>([])
  const [listTaskDone, setListTaskDone] = useState<Task[]>([])

  useEffect(() => {
    loadTasks()
    return () => {
    }
  }, [])

  const loadTasks = async () => {
    try {
      const listTodo = await TaskService.getListTask("todo");
      const listDoing = await TaskService.getListTask("doing");
      const listDone = await TaskService.getListTask("done");
      setListTaskTodo(listTodo)
      setListTaskDoing(listDoing)
      setListTaskDone(listDone)
    } catch (error) {
      console.error("[ERROR load-tasks] ", error);
    }
  }





  return (
    <>
      <TaskProvider>
        <SideBarShareComponent />
        <div className="container mt-5">
          <HeaderComponent />
          <div className=" mt-1">
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col">
                <CardListTaskComponent title='Todo' color='secondary' listTask={listTaskTodo} />
              </div>
              <div className="col">
                <CardListTaskComponent title='Doing' color='warning' listTask={listTaskDoing} />
              </div>
              <div className="col">
                <CardListTaskComponent title='Done' color='success' listTask={listTaskDone} />
              </div>
            </div>
          </div>
        </div>
        <HelperComponent onLoadTask={loadTasks}></HelperComponent>
      </TaskProvider>
    </>
  )
}
