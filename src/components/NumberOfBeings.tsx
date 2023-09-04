interface BeingsProps {
    numberOfBeings: string;
    onChangeBeingsNumber: (value: string) => void;
}

export const NumberOfBeings: React.FC<BeingsProps> = ({ numberOfBeings, onChangeBeingsNumber }) => (
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

    </>
);