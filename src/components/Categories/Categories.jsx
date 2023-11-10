import { useSelector } from 'react-redux'
import './categories.css'

export const Categories = ({ handleCategory}) => {
  

  const events = useSelector(state => state.events)
  const categories = [...new Set(events.map((item) => item.category))]


  return (
    <div role='categories' className='container-categories'>

      {
        categories.map((category) => (
          <label className='label-categorie' key={category} htmlFor={category}>
          {category}
          <input 
          onChange={() => handleCategory(category)}
            type="checkbox" 
            name={category} 
            id={category} 
          />
      </label>
        ))
      }
       
      
    </div>
  )
}
