import React, { useEffect, useState } from 'react'
import {FaArrowUp} from 'react-icons/fa'
import './button.css'

export const ButtonScroll = () => {

    const [backTop, setBackTop] = useState(false)




    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setBackTop(true)
            }else{
                setBackTop(false)
            }
        })
    }, [])

    

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
  

  return (
    <div>
        {
            backTop && (

                <button className='btn-scroll' onClick={scrollUp}>
                    <FaArrowUp  size="1.5rem" color='#fcfcfc'  />
                </button>
            )

        }
    </div>
  )
}
