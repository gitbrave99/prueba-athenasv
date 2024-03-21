import profile from "../../assets/profile.jpg";

export const MainProfilePage = () => {
  return (
    <div className="container">
      <div className="card mb-3 border border-0 p-4">
        <div className="row  d-flex align-items-center">
          <div className="col-md-2">
            <img src={profile} className="img-fluid rounded-circle" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">Jorge Isaac Godínez Preza</h3>
              <h5 className='text-secondary'>FullStack developer</h5>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-md-6">
          <div>
            <b>Education: </b>
            <p className="card-text">
              <span>Universidad Católica de El Salvador</span>
            </p>
          </div>
          <div>
            <b>Interests: </b>
           
              <ul>
                <li>Angular</li>
                <li>Angular Material</li>
                <li>Gym</li>
                <li>Calisthenics</li>
              </ul>
           
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div>
            <b>Phone: </b>
            <p className="card-text">
              <span>2257-7777</span>
            </p>
          </div>
          <div>
            <b>Email: </b>
            <p className="card-text">
              <span>jhonwick@gmail.com</span>
            </p>
          </div>
          <div>
            <b>Github: </b>
            <p className="card-text">
              <a href="https://github.com/gitbrave99" target="blank">Github</a>
            </p>
          </div>
          <div>
            <b>Linkedin: </b>
            <p className="card-text">
              <a href="www.linkedin.com/in/isaac-godínez-preza-gp" target="blank">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
