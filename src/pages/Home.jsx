import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Filters } from '../components/Filters/Filters'
import { Events } from '../components/Eventos/Events'
import { useFilters } from '../hooks/useFilters'

export const Home = ({data, title}) => {
  
  const { valueSearch, handleCategory,selectedCategories, 
     filteredData} = useFilters(data)

  

  return (
    <>
      <Hero title={title}/>
      <Filters 
      onFilter={valueSearch }
      handleCategory={handleCategory }
      selectedCategories={selectedCategories }
       />
      <Events eventsFiltered={filteredData} />

    </>
  )
}
