import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export const HeaderComponent = () => {
    const { setIsModalVisible, setTitleFormModal, resetTask } = useContext(TaskContext)
    const onOPenModal = () => {
        setTitleFormModal("Add task");
        setIsModalVisible(true);
        resetTask()
    }
    return (
        <>
            <div className="card mt-2 p-2 mb-2">
                <h1 className='text-center'>List task</h1>
                <div className="d-flex justify-content-center">
                    <div>
                        <button type="button" className="btn btn-primary" onClick={onOPenModal}>Add task</button>
                    </div>
                </div>
            </div>
        </>
    )
}
