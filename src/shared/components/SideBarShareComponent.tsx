import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const SideBarShareComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Task")

  interface NavItems {
    path: string,
    title: string
  }

  const listItems: NavItems[] = [
    { path: "task", title: "task" },
    { path: "profile", title: "profile" }
  ]
  const location = useLocation();


  useEffect(() => {
    const path = location.pathname;
    const parts = path.split('/');
    const resourceName = parts[parts.length - 1];
    setSelectedItem(resourceName.trim())
    return () => {

    }
  }, [location.pathname])




  return (
    <>
      <nav className="navbar  bg-body-tertiary" style={{ "marginBottom": "45px", "backgroundColor": "red" }}>
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Task App</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="list-group">
                {
                  listItems.map((item) => (
                    <Link key={item.title} to={item.path}
                      className={`text-capitalize list-group-item list-group-item-action ${selectedItem == item.title ? "active" : ""}`}>
                        
                        {item.title}
                        </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
