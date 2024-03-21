import { Task } from '../interfaces/Task.interface'
import { CardItemComponent } from './CardItemComponent'

interface TableTaskProps {
  listTask: Task[],
  title: string,
  color: string
}

export const CardListTaskComponent = ({ listTask, title, color }: TableTaskProps) => {
  const headerClass = `card-header bg-${color} text-white text-center`;
  return (
    <>
    
      <div className="card" style={{ "border": "none" }}>
        <div className={headerClass}>
          <h5>{title}</h5>
        </div>
        <div className="">
          {
            listTask.map((task) => (
              <CardItemComponent key={task.id} task={task} color={color}></CardItemComponent>
            ))
          }
        </div>
      </div>
    </>
  )
}
