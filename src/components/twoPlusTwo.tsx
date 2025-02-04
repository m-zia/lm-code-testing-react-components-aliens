import ErrorMessage from "./ErrorMessage";

interface TwoPlusTwo {
    twoPlusTwo: string;
    onChangeTwoPlusTwo: (value: string) => void;
}

export const TwoPlusTwo: React.FC<TwoPlusTwo> = ({ twoPlusTwo, onChangeTwoPlusTwo }) => {

    const validate: (value: string) => string | undefined = (value) => {
        if (value !== "4") {
            return "Error. Please select the correct answer.";
        }

        return undefined;
    };

    const errorMessage = validate(twoPlusTwo);

    return (
        <>
            <div>
                <label htmlFor='twoPlusTwo'>What is 2+2 ?</label>
                <select id='twoPlusTwo'
                    value={twoPlusTwo}
                    onChange={(e) => onChangeTwoPlusTwo(e.target.value)}>
                    <option value="default">Please select an answer</option>
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
            </div>

            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};