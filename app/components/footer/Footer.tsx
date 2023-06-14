import Container from '../Container';
import FooterContactInfo from './FooterContactInfo';
import { info, managment, social } from '@/FooterData';

const Footer = () => {
	return (
		<section
			id='contact'
			className='
				relative 	
				w-full 
				z-[50] 
				bg-[#0A0A35]
				text-white
          '>
			<Container>
				<div className='grid sm:grid-cols-3 gap-y-10 sm:justify-items-center px-10 py-14'>
					<FooterContactInfo list={info} />
					<FooterContactInfo list={social} />
					<FooterContactInfo list={managment} />
				</div>
			</Container>
			<div className='border-t border-white/30'>
				<p className='text-center py-1 font-medium flex justify-center items-center gap-1'>
					<span className='brightness-50'>© رواد النخبة </span>
					<span className='hover:text-orange-main cursor-pointer transition divide-neutral-200 ease-linear'>
						Software House
					</span>
				</p>
			</div>
		</section>
	);
};

export default Footer;
