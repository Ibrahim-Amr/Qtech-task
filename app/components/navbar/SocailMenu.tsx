import { FiMail } from 'react-icons/fi';
import { IoCall } from 'react-icons/io5';
import Social from './Social';

const SocailMenu = () => {
	return (
		<div className='hidden lg:flex justify-center items-center gap-x-5'>
			<Social icon={IoCall} title='Github' href='tel:+966531644857' />
			<Social icon={FiMail} title='E-mail' href='mailto:rowadco323@gmail.com' />
		</div>
	);
};

export default SocailMenu;
