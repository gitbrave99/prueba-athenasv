import React from 'react'

interface ConfirmModalProps {
  title: string,
  description: string,
  onConfirm: () => void
}


export const ConfirmModal = ({ description, title, onConfirm }: ConfirmModalProps) => {
  return (
    <>

      <div className="modal fade" id="confirmModal" tabIndex={-1} aria-labelledby="confirmModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="confirmModalLabel">{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {description}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
