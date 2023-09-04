import { render, fireEvent, screen } from '@testing-library/react';
import { TwoPlusTwo } from './twoPlusTwo';

test('renders the TwoPlusTwo component', () => {
    render(<TwoPlusTwo twoPlusTwo='' onChangeTwoPlusTwo={() => { }} />);
    // Assert that the component is rendered by checking for a specific element
    expect(screen.getByLabelText('What is 2+2 ?')).toBeInTheDocument();
});

test('input fields display the correct values', () => {
    const twoPlusTwoValue = 'Not 4';
    render(<TwoPlusTwo twoPlusTwo={twoPlusTwoValue} onChangeTwoPlusTwo={() => { }} />);

    // Assert that the input field displays the correct value
    expect(screen.getByLabelText('What is 2+2 ?')).toHaveValue(twoPlusTwoValue);
});

test('onChange function is called with the correct parameters', () => {
    const onChangeMock = jest.fn();
    render(<TwoPlusTwo twoPlusTwo="" onChangeTwoPlusTwo={onChangeMock} />);

    // Simulate a change event on the input field
    fireEvent.change(screen.getByLabelText('What is 2+2 ?'), {
        target: { value: 'Not 4' },
    });

    // Assert that the onChange function is called with the correct value
    expect(onChangeMock).toHaveBeenCalledWith('Not 4');
});
