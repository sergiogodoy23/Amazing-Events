import { fetchData } from '../../hooks/fetchData'
import './categories.css'

export const Categories = ({selectedCategories, handleCategory}) => {


  const {data} = fetchData()

  const categories = [...new Set(data.map((item) => item.category))]



  return (
    <div className='container-categories'>

      {
        categories.map((category, i) => (
          <label className='label-categorie' key={i} htmlFor={category}>
          {category}
          <input 
          checked={selectedCategories?.includes(category)}
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
