import { render, fireEvent, screen } from '@testing-library/react';
import { ReasonForSparing } from './ReasonForSparing';

test('renders ReasonForSparing component', () => {
    render(<ReasonForSparing reason="3" onChangeReason={() => { }} />);
});


test('displays correct value for input field', () => {
    render(<ReasonForSparing reason="5" onChangeReason={() => { }} />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('5');
});


test('input field calls onChange function with correct parameters', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();
  
    // Render the ReasonForSparing component with the mock function
    const { getByLabelText } = render(
      <ReasonForSparing reason="" onChangeReason={onChangeMock} />
    );
  
    // Get the input field using the label text
    const input = getByLabelText('Reason For Sparing');
  
    // Simulate a change event on the input field
    fireEvent.change(input, { target: { value: 'test reason' } });
  
    // Check if the onChange function was called with the correct parameters
    expect(onChangeMock).toHaveBeenCalledWith('test reason');
  });
