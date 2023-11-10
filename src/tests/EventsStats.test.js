import { render, screen,  } from '@testing-library/react';
import "@testing-library/jest-dom"
import { EventsStats } from '../components/Tables/EventsStats';
import { Provider } from 'react-redux';
import store from '../store/store';





describe('<EventsStats />', () => {
  test('renderizar componente', () => {

   const {getByText} = render(
      <Provider store={store}>
        <EventsStats />
      </Provider>
    );

    
      expect(screen.getByText('Events Statistics')).toBeInTheDocument();
      

  });
});