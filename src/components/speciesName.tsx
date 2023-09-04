interface SpeciesNameProps {
    speciesName: string;
    onChangeSpeciesName: (value: string) => void;
}

export const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => (
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
    </>
);