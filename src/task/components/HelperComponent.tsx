import { useContext } from 'react'
import { FormTaskModalComponent } from './FormTaskModalComponent'
import { ToastNotificationcomponent } from '../../shared/components/ToastNotificationcomponent'
import { TaskContext } from '../context/TaskContext'
import { ConfirmModal } from '../../shared/components/ConfirmModal'
import { TaskService } from '../services/TaskService'

interface HelperComponent {
    onLoadTask: () => Promise<void>
}

export const HelperComponent = ({onLoadTask }: HelperComponent) => {
    const { idTask,  titleFormModal, titleNotification, descriptionNotification,
        isNotificationVisible, isMdConfirmVisible, setIsMdConfirmVisible, setIsNotificationVisible,
        manageNotificationVisibility } = useContext(TaskContext);

    function hideModalConfirm() {
        setIsMdConfirmVisible(false)
    }

    function hideNotification() {
        setIsNotificationVisible(false)
    }

    async function onDelete() {
        let result = "";
        try {
            result = await TaskService.deleteTask(idTask);
            if (result == "OK") {
                onLoadTask().then(() => {
                    manageNotificationVisibility(true, "Deleted", "Task has been deleted")
                    hideModalConfirm()
                })
            }
        } catch (error) {
            manageNotificationVisibility(true, "Error deleting", "Ooops! " + error)
        }
    }

    return (
        <>
            <FormTaskModalComponent
                title={titleFormModal} onLoadTask={onLoadTask}/>
            <ToastNotificationcomponent
                title={titleNotification}
                description={descriptionNotification}
                show={isNotificationVisible}
                onHide={hideNotification} />
            <ConfirmModal
                isVisible={isMdConfirmVisible}
                hideModal={hideModalConfirm}
                description='¿Do you really want to delete the task? this proccess cannot be undone'
                title='Delete task' onConfirm={onDelete} />
        </>
    )
}
