import { render, screen } from '@testing-library/react'; // Asegúrate de importar 'screen' para usar 'getByText'
import "@testing-library/jest-dom"
import { DetailCard } from '../components/Detail/DetailCard';





describe('<DetailCard', () => {
  test('verificar si se muestran los textos que llegan como props', () => {
    const event = {
      name: 'Event Name',
      description: 'Event Description',
      date: 'Event Date',
      category: 'Event Category',
      price: 100,
      place: 'Event Place',
      capacity: 200,
      image: 'eventImage.jpg',
    };

    const {getByText} = render(<DetailCard event={event} />);

    expect(screen.getByText('Event Name')).toBeInTheDocument();
    expect(screen.getByText('Event Description')).toBeInTheDocument();
    expect(screen.getByText('Event Date')).toBeInTheDocument();
    expect(screen.getByText('Event Category')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Event Place')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
  });
});
