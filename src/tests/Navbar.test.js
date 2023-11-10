import { fireEvent, render} from '@testing-library/react'
import "@testing-library/jest-dom"
import { Navbar } from '../components/Navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

describe('<Navbar>', () => { 
    test('Renderiza los enlaces de navegación', () => {
        const{getByText} = render(
          <Router>
            <Navbar />
          </Router>
        );
   

        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('Upcoming Events')).toBeInTheDocument();
        expect(getByText('Past Events')).toBeInTheDocument();
        expect(getByText('Stats')).toBeInTheDocument();
        expect(getByText('Contact')).toBeInTheDocument();
      
    })

    test('verificar funcionamiento del navbar responsive', () => {
      const{getByRole} = render(
        <Router>
          <Navbar />
        </Router>

      );
        const btnMenu = getByRole('button');
        expect(btnMenu).toBeInTheDocument();
        const navItems = getByRole('list');
        expect(navItems).not.toHaveClass('active');
        fireEvent.click(btnMenu);
        
    })
  
});