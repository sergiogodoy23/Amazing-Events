import {render} from '@testing-library/react'
import "@testing-library/jest-dom"
import { Hero } from '../components/hero/Hero';
import { Provider } from 'react-redux';
import store from '../store/store';




describe('<Hero />', () => {
 


  test('Verificar si se renderizan los textos', () => {
    const title = 'Título Hero';
  

    const {container}= render(
      <Provider store={store}>

        <Hero title={title} />
      </Provider>
    );

    

    const titleElement = container.querySelector("h2")
    expect(titleElement).toBeInTheDocument()

    const descriptionElement = container.querySelector('span')
    expect(descriptionElement).toBeInTheDocument();

 
  });
});
