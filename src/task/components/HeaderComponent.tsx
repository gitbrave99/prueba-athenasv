import  { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export const HeaderComponent = () => {
    const { setIsModalVisible,setTitleFormModal, resetTask } = useContext(TaskContext)
    const onOPenModal=()=>{
        setTitleFormModal("Add task");
        setIsModalVisible(true);
        resetTask()
    }
    return (
        <>
            <div className="card mt-5 p-2 mb-2">
                <h1 className='text-center'>List task</h1>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                <button type="button" className="btn btn-primary" onClick={onOPenModal}>Add task</button>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Filter By
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Todo</a></li>
                                        <li><a className="dropdown-item" href="#">Doing</a></li>
                                        <li><a className="dropdown-item" href="#">Done</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
