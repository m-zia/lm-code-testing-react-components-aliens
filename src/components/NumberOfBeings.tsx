import ErrorMessage from "./ErrorMessage";

interface BeingsProps {
    numberOfBeings: string;
    onChangeBeingsNumber: (value: string) => void;
}

export const NumberOfBeings: React.FC<BeingsProps> = ({ numberOfBeings, onChangeBeingsNumber }) => {

    const validate: (value: string) => string | undefined = (value) => {
        if (
            parseInt(value) < 1000000000 ||
            /[a-zA-Z!@#$%^&*(),.?":{}|<>]/.test(value)
        ) {
            return "Enter a valid number greater than or equal to 1 billion";
        }
        return undefined;
    };

    const errorMessage = validate(numberOfBeings);

    return (
        <>
            <div>
                <label htmlFor='numberOfBeings'>Number of Beings</label>
                <div>
                    <input id='numberOfBeings'
                        type='text'
                        value={numberOfBeings}
                        onChange={(e) => onChangeBeingsNumber(e.target.value)} />
                </div>
            </div>

            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};