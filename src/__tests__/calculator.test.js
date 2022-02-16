import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Test render calculator component', () => {
  test('Render components', () => {
    const tree = renderer.create(<Calculator />);
    expect(tree).toMatchSnapshot();
  })
})

describe('Test the events with the interface', () => {
  test('Button pressed 6', () => {
    render(<Calculator />);
    const btnElement = screen.getByText(/6/i);
    const result = screen.getByTestId('result')
    fireEvent.click(btnElement);
    expect(result).toHaveTextContent('6');
  })

  test('Button pressed 12', () => {
    render(<Calculator />);
    const number1 = screen.getByText(/1/i);
    const number2 = screen.getByText(/2/i);
    fireEvent.click(number1);
    fireEvent.click(number2);
    const result = screen.getByTestId('result');
    expect(result).toHaveTextContent('12');
  })

})


