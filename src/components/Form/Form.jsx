import './form.css'
import iconFb from './icon-facebook.png'
import iconIg from './icon-instagram.png'
import iconTw from './icon-twitter.png'

export const Form = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    
  }


  return (

    <div className='contenedor-contact'>
      <div className='info-form'>
        <h1 className='title-form'>Contact us</h1>

        <div className='icons'>
          <img className='icon-img' src={iconFb} alt='icon' />
          <img className='icon-img' src={iconIg} alt='icon' />
          <img className='icon-img' src={iconTw} alt='icon' />
          
        </div>
      </div>
        <form onSubmit={handleSubmit} className='form-contact'>
          <div className='container-input'>
          <label className='label' htmlFor="">
            Name
          </label>
          <input className='input' placeholder='Name' type="text" />
          </div>
          <div className='container-input'>
          <label className='label' htmlFor="">
            Last Name
          </label>
          <input className='input' placeholder='Last Name' type="text" />
          </div>

          <div className='container-input'>
            <label className='label' htmlFor="">
              Email
            </label>
            <input className='input' type="email" placeholder='Email' />
          </div>


          <div className='container-input'>
            <label className='label' htmlFor="">
            Message 
            </label>
            <textarea placeholder='message' name="" id="" cols="30" rows="10"></textarea>
          </div>

        <button className='btn-form' type='submit'>Send Message</button>


        </form>
    </div>

 
  )
}
