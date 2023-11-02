import { Categories } from '../Categories/Categories'
import './Filters.css'


export const Filters = ({onFilter,selectedCategories, handleCategory }) => {


  const handleChange = (e) => {
    onFilter(e.target.value)
  }

  
  return (
    <div className="container-filters">
        
    <Categories selectedCategories={selectedCategories}
      handleCategory={handleCategory}
     />

    <input className='inputSearch'
     type="text"
     onChange={handleChange}
     placeholder='search event' />

    </div>
  )
}
