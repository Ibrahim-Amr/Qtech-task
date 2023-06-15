import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../navbar/Logo';

interface Prop {
	setToggleMenu: any;
}
const SidebarHeader: React.FC<Prop> = ({ setToggleMenu }) => {
	return (
		<header className='flex justify-between items-center font-bold pt-10'>
			<Logo />
			<AiOutlineClose
				size={28}
				className='cursor-pointer text-white'
				onClick={() => {
					setToggleMenu(false);
					document.body.classList.remove('overflow-hidden');
				}}
			/>
		</header>
	);
};

export default SidebarHeader;
