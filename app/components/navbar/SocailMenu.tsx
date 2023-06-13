import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Social from './Social';

const SocailMenu = () => {
	return (
		<div className='hidden lg:flex justify-center items-center gap-x-5'>
			<Social
				icon={FaLinkedinIn}
				title='Linkedin'
				href='https://www.linkedin.com/in/ibrahim-omar-883156253/'
			/>
			<Social icon={FaGithub} title='Github' href='https://github.com/Ibrahim-Amr' />
			<Social icon={FiMail} title='E-mail' href='mailto:ebrahimamra69@gmail.com' />
		</div>
	);
};

export default SocailMenu;
