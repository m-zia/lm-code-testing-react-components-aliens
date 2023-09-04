import { render, fireEvent, screen } from '@testing-library/react';
import { SpeciesName } from './speciesName';

test('renders SpeciesName component', () => {
    render(<SpeciesName speciesName="3" onChangeSpeciesName={() => { }} />);
});


test('displays correct value for input field', () => {
    render(<SpeciesName speciesName="5" onChangeSpeciesName={() => { }} />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('5');
});


test('input field calls onChange function with correct parameters', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();
  
    // Render the SpeciesName component with the mock function
    const { getByLabelText } = render(
      <SpeciesName speciesName="" onChangeSpeciesName={onChangeMock} />
    );
  
    // Get the input field using the label text
    const input = getByLabelText('Species Name');
  
    // Simulate a change event on the input field
    fireEvent.change(input, { target: { value: '42' } });
  
    // Check if the onChange function was called with the correct parameters
    expect(onChangeMock).toHaveBeenCalledWith('42');
  });
