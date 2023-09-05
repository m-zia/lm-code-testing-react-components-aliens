import ErrorMessage from "./ErrorMessage";

interface SparingProps {
    reason: string;
    onChangeReason: (value: string) => void;
}

export const ReasonForSparing: React.FC<SparingProps> = ({ reason, onChangeReason }) => {


    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 17 || value.length > 153) {
          return "Keep your reason between 17 and 153 characters...OR DIE!!!";
        }
        return undefined;
      };
    
      const errorMessage = validate(reason);

      
    return (
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

            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};