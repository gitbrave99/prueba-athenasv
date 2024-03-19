import React, { useEffect, useState } from 'react'
import { CardListTasks } from '../components/CardListTasks'
import { TaskService } from '../services/TaskService'
import { Task } from '../interfaces/Task.interface'
import { ConfirmModal } from '../../shared/components/ConfirmModal'
import { Link } from 'react-router-dom'
import { AddTaskModal } from '../components/AddTaskModal'

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
  const onSaveTask = async (task: Task) => {
    try {
      const result = await TaskService.addTask(task);
      console.log("results", result);

    } catch (error) {
      console.log("error ", error);

    }
  }


  return (
    <>
      <h1 className='text-center'>List task</h1>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal">
          Add
        </button>
      </div>

      <Link to={"ruta"}></Link>
      <div className="container mt-1">
        <div className="row">
          <div className="col-4">
            <CardListTasks title='Todo' color='secondary' listTask={listTaskTodo} />
          </div>

          <div className="col-4">
            <CardListTasks title='Doing' color='warning' listTask={listTaskTodo} />
          </div>

          <div className="col-4">
            <CardListTasks title='Done' color='success' listTask={listTaskDone} />
          </div>
        </div>
      </div>
      <AddTaskModal onSubmit={onSaveTask}></AddTaskModal>
    </>
  )
}
