import { useEffect, useState } from "react"

export const useFilters = (data) => {

    const [search, setSearch] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([])
    const [filteredData, setFilteredData] = useState([])
  
    const valueSearch = (text) => {
      setSearch(text)
    }
  
    const handleCategory = (category) => {
      if(selectedCategories.includes(category)){
        setSelectedCategories(selectedCategories.filter(itemCategory => itemCategory !== category))
      }else{
        let categories = [...selectedCategories, category]
        setSelectedCategories(categories)
      }
    }
   
    useEffect(() => {
      

      const filtered = data.filter( item => 
        (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
          (search.trim() === "" || item.name.toLowerCase().includes(search.toLowerCase()))
        )
        
        setFilteredData(filtered)
    }, [search,selectedCategories, data])




  return {
    valueSearch,
    handleCategory,
    selectedCategories,
    filteredData,
  }
}
