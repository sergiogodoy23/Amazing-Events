import { Link } from "react-router-dom"
import '../app.css'

export const PageNotFound = () => {


  return (
    <div className="container-notfound">
        <h2 className="title-found">404</h2>
        <p className="description-found">Page Not Found...</p>
        <button className="btn-notfound">
        <Link className="link-notfound"  to='/'>BACK TO HOME</Link>
        </button>
    </div>
  )
}


