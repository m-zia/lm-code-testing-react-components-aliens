import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName';
import { PlanetName } from './PlanetName';
import { NumberOfBeings } from './NumberOfBeings';


const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
const [planetName, setPlanetName] = useState('Earth');
const [numberOfBeings, setNumberOfBeings] = useState('0')


	return (
		<section className='w12MForm'>
			<W12MHeader />

			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />

			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeBeingsNumber={(value) => setNumberOfBeings(value)} />
		</section>
	);
};

export default W12MForm;
