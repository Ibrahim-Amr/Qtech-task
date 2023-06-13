import Goals from './components/goals/Goals';
import Slider from './components/hero/Slider';
import Services from './components/services/Services';

export default function Home() {
	return (
		<>
			<Slider />
			<Services />
			<Goals />
		</>
	);
}
