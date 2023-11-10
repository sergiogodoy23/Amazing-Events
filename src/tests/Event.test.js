import { fireEvent,  render } from '@testing-library/react';
import "@testing-library/jest-dom"
import { BrowserRouter as Router} from 'react-router-dom'; 
import { Event } from '../components/Eventos/Event';

describe('Event Component', () => {

      const eventData = {
        name: 'Event Name',
        description: 'Event Description',
        price: 100,
        _id: 'event123',
        image: 'event-image.jpg',
      };

      
  test('verificar si se renderiza la card', () => {

    const { getByText } = render(
      <Router>
        <Event {...eventData} />
      </Router>
    );

    expect(getByText('Event Name')).toBeInTheDocument();

    expect(getByText('Event Description')).toBeInTheDocument();

    expect(getByText('$100')).toBeInTheDocument();


  })

    test('verificar si funciona button', () => { 


      const {  getByRole } = render(
        <Router>
          <Event {...eventData} />
        </Router>
      );
  

      const buttonElement = getByRole("buttonElement")
      fireEvent.click(buttonElement);
      expect(window.location.pathname).toBe('/detail/event123'); 


  });
});
