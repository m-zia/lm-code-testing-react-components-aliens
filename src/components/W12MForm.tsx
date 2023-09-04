import { useState } from 'react';
import W12MHeader from './W12MHeader';
import { SpeciesName } from './speciesName';
import { PlanetName } from './PlanetName';
import { NumberOfBeings } from './NumberOfBeings';
import { TwoPlusTwo } from './twoPlusTwo';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('Earth');
	const [numberOfBeings, setNumberOfBeings] = useState('0')
	const [twoPlusTwo, setTwoPlusTwo] = useState('')

	return (
		<section className='w12MForm'>
			<W12MHeader />

			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeBeingsNumber={(value) => setNumberOfBeings(value)} />
			<TwoPlusTwo twoPlusTwo={twoPlusTwo} onChangeTwoPlusTwo={(value) => setTwoPlusTwo(value)} />

		</section>
	);
};

export default W12MForm;
