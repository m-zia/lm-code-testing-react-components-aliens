interface SparingProps {
    reason: string;
    onChangeReason: (value: string) => void;
}

export const ReasonForSparing: React.FC<SparingProps> = ({ reason, onChangeReason }) => (
    <>
        <div>
            <label htmlFor='reasonForSparing'>Reason For Sparing</label>

            <div>
                <textarea
                    id='reasonForSparing'
                    value={reason}
                    onChange={(e) => onChangeReason(e.target.value)}
                />
            </div>
        </div>
    </>
);