import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { UpcomingStats } from '../components/Tables/UpcomingStats';
import { Provider } from 'react-redux';
import store from '../store/store';


describe('<UpcomingStats />', () => {
  test('verificar renderizado estadisticas de upcomingStats', async () => {
   
   
   const {getByText} = render(
    <Provider store={store}>
    <UpcomingStats />
    </Provider>
    );
      

    expect(screen.getByText('Upcoming events statistics by category')).toBeInTheDocument();

  });
});
