import { render, fireEvent, screen } from '@testing-library/react';
import { PlanetName } from './PlanetName';

test('renders PlanetName component', () => {
    render(<PlanetName planetName="3" onChangePlanetName={() => { }} />);
});

 
test('displays correct value for input field', () => {
    render(<PlanetName planetName="5" onChangePlanetName={() => { }} />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputElement.value).toBe('5');
});


test('input field calls onChange function with correct parameters', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();
  
    // Render the PlanetName component with the mock function
    const { getByLabelText } = render(
      <PlanetName planetName="" onChangePlanetName={onChangeMock} />
    );
  
    // Get the input field using the label text
    const input = getByLabelText('Planet Name');
  
    // Simulate a change event on the input field
    fireEvent.change(input, { target: { value: '42' } });
  
    // Check if the onChange function was called with the correct parameters
    expect(onChangeMock).toHaveBeenCalledWith('42');
  });
