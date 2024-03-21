interface ToastNotificationProps {
  title: string,
  description: string,
  show:boolean,
  onHide:()=>void
}

export const ToastNotificationcomponent = ({ title, description, show, onHide }: ToastNotificationProps) => {
  return (
    <div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className={`toast fade ${show ?"show":""}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <strong className="me-auto">
              {title}
            </strong>
            {/* <small>11 mins ago</small> */}
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="toast-body">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}
