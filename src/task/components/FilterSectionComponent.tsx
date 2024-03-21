import { useEffect, useState } from 'react'
import { Task } from '../interfaces/Task.interface'
import { CardItemComponent } from './CardItemComponent'
import { TaskService } from '../services/TaskService'
import { LoadingComponent } from '../../shared/components/LoadingComponent'

export const FilterSectionComponent = () => {

    const [listFiltered, setlistFiltered] = useState<Task[]>([])
    const [filterBy, setFilterBy] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const loadFilteredTasks = async () => {
            try {
                const filteredList = await TaskService.getListTask(filterBy);
                setlistFiltered(filteredList);
                setIsLoading(false);
                
            } catch (error) {
                console.error("[ERROR load-filtered-tasks] ", error);
            }
        };

        if (filterBy) {
            setIsLoading(true)
            loadFilteredTasks();
        }
    }, [filterBy])


    // const onSelectChange = (evt: ChangeEvent<HTMLSelectElement>) => {
    //     const { name, value } = evt.target;
    //     setTask((prevState) => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h5 className='text-center'>Filtered List</h5>
                <div className="row">
                    <div className="col-12 col-md-4 offset-md-4">
                        <select className="form-select" aria-label="select filter"
                            onChange={(evt) => { setFilterBy(evt.target.value) }}
                            value={filterBy}>
                            <option defaultValue={""}>Select one</option>
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="card-body">
                <div className="row row-cols-md-3">
                    {
                        isLoading ? <LoadingComponent /> :
                            (
                                listFiltered?.map((task) => (
                                    <div className="col" key={task.id} >
                                        <CardItemComponent color='dark' task={task} />
                                    </div>
                                ))
                            )
                    }
                </div>
            </div>
        </div>
    )
}
