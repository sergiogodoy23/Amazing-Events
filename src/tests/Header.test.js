import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '../components/Header/Header'




describe('<Header />', () => { 


    test('comprobar si se renderiza el titulo en h1', () => { 


        render(
        <Router>
            <Header />
        </Router>)



            const headerElement = screen.getByRole("headerElement")          

            expect(headerElement).toBeInTheDocument()
                  

     })
 })