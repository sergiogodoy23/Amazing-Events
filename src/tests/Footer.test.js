import {render} from '@testing-library/react'
import "@testing-library/jest-dom"
import { Footer } from '../components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Footer />', () => { 
  test('Verificar si renderizan links del footer', () => { 

    const {getByText} = render(
      <Router>
        <Footer />
      </Router>
    )

    expect(getByText("Upcoming Events")).toBeInTheDocument()
    expect(getByText("Past Events")).toBeInTheDocument()
    expect(getByText("Stats")).toBeInTheDocument()
    expect(getByText("Contact")).toBeInTheDocument()

  })
  
})