import { render, screen,  } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import store from '../store/store';
import { Categories } from '../components/Categories/Categories';





describe('<Categories />', () => {
  it('renderizar las categorías correctamente', () => {



    render(
      <Provider store={store}>
        <Categories selectedCategories={[]} handleCategory={() => {}} />
      </Provider>
    );

    expect(screen.getByRole("categories")).toBeInTheDocument();
  });
});








