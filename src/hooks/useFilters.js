import { useEffect, useState } from "react"

export const useFilters = (allEvents) => {

    const [search, setSearch] = useState("")
    const [selectedCategories, setSelectedCategories] = useState([])
    const [filteredData, setFilteredData] = useState([])
  
    const valueSearch = (text) => {
      setSearch(text)
    }
  
    const handleCategory =(category) =>{
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter( itemCategory => itemCategory !== category))
      }else{
        setSelectedCategories([...selectedCategories, category])
      }
    }


    useEffect(() => {
      
      const filtered = allEvents.filter( item => 
        (selectedCategories.length === 0 || selectedCategories.includes(item.category)) && 
        (search.trim() === "" || item.name.toLowerCase().includes(search.toLowerCase()))
      )
      
        setFilteredData(filtered)
    }, [search,selectedCategories, allEvents])




  return {
    valueSearch,
    handleCategory,
    filteredData,
  }
}
