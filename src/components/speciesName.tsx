import ErrorMessage from "./ErrorMessage";

interface SpeciesNameProps {
    speciesName: string;
    onChangeSpeciesName: (value: string) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 3 || value.length > 23) {
            return "Species name must be between 3 and 23 characters.";
        }

        if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return "Species name cannot contain numbers or special characters.";
        }
        return undefined;
    };

    const errorMessage = validate(speciesName);


    return (
        <>
            <div>
                <label htmlFor='speciesName'>Species Name</label>

                <div>
                    <input id='speciesName'
                        type='text'
                        value={speciesName}
                        onChange={(e) => onChangeSpeciesName(e.target.value)} />
                </div>
            </div>
            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};