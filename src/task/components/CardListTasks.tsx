import React from 'react'
import { Task } from '../interfaces/Task.interface'

interface TableTaskProps {
  listTask: Task[],
  title: string,
  color:string
}

export const CardListTasks = ({ listTask, title }: TableTaskProps) => {
  return (
    <>
      <div className="card" style={{ "border": "none" }}>
        <div className="card-header bg-secondary text-white text-center">
          <h5>{title}</h5>
        </div>
        <div className="">

          {
            listTask.map((task) => (
              <div className="card m-2" key={task.id}>
                <div className="card header">
                  <h5 className="card-title p-1">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        {task.name}
                      </div>
                      <div>
                        <div className="btn-group-sm" role="group" aria-label="Basic outlined example">
                          <button type="button" className="btn btn-warning"><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-success">{task.status}</button>
                          <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">
                            <i className="bi bi-trash"></i>
                            </button>
                        </div>
                      </div>
                    </div>
                  </h5>
                </div>
                <div className="card-body">
                  {task.dueDate}
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </>
  )
}
