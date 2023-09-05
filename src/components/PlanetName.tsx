import ErrorMessage from "./ErrorMessage";

interface PlanetNameProps {
    planetName: string;
    onChangePlanetName: (value: string) => void;
}

export const PlanetName: React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {

    const validate: (value: string) => string | undefined = (value) => {
        if (value.length < 2 || value.length > 49) {
            return "Planet Name must be between 2 and 49 character.";
        }
        if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return "Planet name cannot contain special characters";
        }
        return undefined;
    };

    const errorMessage = validate(planetName);

    return (
        <>
            <div>
                <label htmlFor='planetName'>Planet Name</label>

                <div>
                    <input id='planetName'
                        type='text'
                        value={planetName}
                        onChange={(e) => onChangePlanetName(e.target.value)} />
                </div>

            </div>

            <ErrorMessage errorMessage={errorMessage} />
        </>
    )
};