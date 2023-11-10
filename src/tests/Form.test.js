import { fireEvent, render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import { Form } from '../components/Form/Form'

describe('<Form />', () => { 
  test('Verificar si se renderiza los elementos del form', () => { 

     const {getByText} = render(<Form />);


    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  })

})