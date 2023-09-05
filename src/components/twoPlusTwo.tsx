import ErrorMessage from "./ErrorMessage";

interface TwoPlusTwo {
    twoPlusTwo: string;
    onChangeTwoPlusTwo: (value: string) => void;
}

export const TwoPlusTwo: React.FC<TwoPlusTwo> = ({ twoPlusTwo, onChangeTwoPlusTwo }) => {

    const validate: (value: string) => string | undefined = (value) => {
        if (value !== "4") {
            return "Please select the correct answer. (it's 4 🤫)";
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
                    <option value="4">4</option>
                    <option value="Not 4">Not 4</option>
                </select>
            </div>

            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};