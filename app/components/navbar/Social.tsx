'use client';
import useNavbarVisibility from '@/hooks/useNavbarVisibility';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface SocailProps {
	title: string;
	label?: string;
	href?: string;
	icon?: IconType;
}
const Social: React.FC<SocailProps> = ({ label, href = '', icon: Icon, title }) => {
	const { currentScroll } = useNavbarVisibility();

	return (
		<>
			{label && (
				<div
					className={`
            font-[Jost]
            text-sm
            tracking-widest
            uppercase
            hover:opacity-70
            transition
            duration-100
            ease-in-out
						${currentScroll >= 20 ? 'text-blue-main' : 'text-white'}
						`}
					title={title}>
					<Link href={href}>{label}</Link>
				</div>
			)}
			{Icon && (
				<Link
					className={`
            hover:opacity-70
            transition
            duration-100
            ease-in-out
						${currentScroll >= 20 ? 'text-blue-main' : 'text-white'}
						`}
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
