interface TwoPlusTwo {
    twoPlusTwo: string;
    onChangeTwoPlusTwo: (value: string) => void;
}
 
export const TwoPlusTwo: React.FC<TwoPlusTwo> = ({ twoPlusTwo, onChangeTwoPlusTwo }) => (
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
    </>
);