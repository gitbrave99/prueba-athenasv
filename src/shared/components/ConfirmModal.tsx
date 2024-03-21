
interface ConfirmModalProps {
  isVisible: boolean,
  title: string,
  description: string,
  onConfirm: () => void,
  hideModal:()=>void

}


export const ConfirmModal = ({ isVisible,hideModal, description, title, onConfirm }: ConfirmModalProps) => {
  
  return (
    <>
      <div className={`modal fade ${isVisible ? "show" : ""}`} id="confirmModal" tabIndex={-1} aria-labelledby="confirmModalLabel"
        style={{ "display": `${isVisible ? "block" : "none"}` }}
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="confirmModalLabel">{title}</h1>
              <button type="button" className="btn-close" onClick={hideModal}></button>
            </div>
            <div className="modal-body">
              {description}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={hideModal}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={() => { onConfirm() }}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
