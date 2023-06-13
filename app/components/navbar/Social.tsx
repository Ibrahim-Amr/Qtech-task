import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocailProps {
	title: string;
	label?: string;
	href?: string;
	icon?: IconType;
}
const Social: React.FC<SocailProps> = ({ label, href = '', icon: Icon, title }) => {
	return (
		<>
			{label && (
				<div
					className='
					text-white
            font-[Jost]
            text-sm
            tracking-widest
            uppercase
            hover:opacity-70
            transition
            duration-100
            ease-in-out'
					title={title}>
					<Link href={href}>{label}</Link>
				</div>
			)}
			{Icon && (
				<Link
					className='
          text-white
            hover:opacity-70
            transition
            duration-100
            ease-in-out'
					href={href}
					target='_blank'
					title={title}>
					<Icon className='w-full h-full' size={18} />
				</Link>
			)}
		</>
	);
};

export default Social;
