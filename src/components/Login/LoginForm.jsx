import { Link } from 'react-router-dom'
import './login.css'
export const LoginForm = () => {
  return (
    <div>

<div className="wrapper">
    <div className="container-login">

        <div className="login-form">
            <h2 className='title-login'>Login Account</h2>
          <input type="text" placeholder="Email or Username" className="input-login"/><br />
          <input type="password" placeholder="Password" className="input-login"/><br />
          <Link to="/"><button className="btn">login</button></Link>
          <Link to="/register"><button className="btn">Register</button></Link>
          
          <span><a>I forgot my username or password.</a></span>
       </div>
      </div>
      </div>
    </div>
  )
}
