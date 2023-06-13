import Contact from './components/Contact/Contact';
import AboutUs from './components/aboutUs/AboutUs';
import Goals from './components/goals/Goals';
import Slider from './components/hero/Slider';
import Services from './components/services/Services';

export default function Home() {
	return (
		<>
			<Slider />
			<Services />
			<Goals />
			<AboutUs />
			<Contact />
		</>
	);
}
