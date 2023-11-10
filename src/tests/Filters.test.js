import {render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom"
import { Filters } from '../components/Filters/Filters'
import { Provider } from 'react-redux';
import store from '../store/store';

describe('<Filters />', () => {
  test('Verificar que funcione el componente y el search', () => {
    const onFilter = jest.fn();
    const handleCategory = jest.fn();
    const selectedCategories = [];

    const { getByRole } = render(
      <Provider store={store}>
      <Filters
        onFilter={onFilter}
        selectedCategories={selectedCategories}
        handleCategory={handleCategory}
      />
      </Provider>
    );

    const inputElement = getByRole('input');

    expect(inputElement).toBeInTheDocument()

    

    fireEvent.change(inputElement, { target: { value: 'ejemplo' } });



    expect(onFilter).toHaveBeenCalledWith('ejemplo');
  });
});