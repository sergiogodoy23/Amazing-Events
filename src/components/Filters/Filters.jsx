import { Categories } from '../Categories/Categories'
import './Filters.css'


export const Filters = ({onFilter, handleCategory }) => {


  const handleChange = (e) => {
    onFilter(e.target.value)
  }

  
  return (
    <div className="container-filters">
        
    <Categories 
      handleCategory={handleCategory}
     />

    <input className='inputSearch'
     type="text"
     role='input'
     onChange={handleChange}
     placeholder='search event &#x1F50E;&#xFE0E;' />

    </div>
  )
}
