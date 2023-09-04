import { render, fireEvent, screen } from '@testing-library/react';
import { NumberOfBeings } from './NumberOfBeings';

test('renders NumberOfBeings component', () => {
    render(<NumberOfBeings numberOfBeings="3" onChangeBeingsNumber={() => { }} />);
});


test('displays correct value for input field', () => {
    render(<NumberOfBeings numberOfBeings="5" onChangeBeingsNumber={() => { }} />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('5');
});


test('input field calls onChange function with correct parameters', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();
  
    // Render the NumberOfBeings component with the mock function
    const { getByLabelText } = render(
      <NumberOfBeings numberOfBeings="" onChangeBeingsNumber={onChangeMock} />
    );
  
    // Get the input field using the label text
    const input = getByLabelText('Number of Beings');
  
    // Simulate a change event on the input field
    fireEvent.change(input, { target: { value: '42' } });
  
    // Check if the onChange function was called with the correct parameters
    expect(onChangeMock).toHaveBeenCalledWith('42');
  });
