'use client';
import useNavbarVisibility from '@/hooks/useNavbarVisibility';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavitemProps {
	href: string;
	label: string;
}

const NavMenuItem: React.FC<NavitemProps> = ({ href, label }) => {
	const pathname = usePathname();
	const { currentScroll } = useNavbarVisibility();

	return (
		<li title={label}>
			<Link
				scroll={false}
				href={href}
				className={`
				block
        text-sm
        font-bold
				relative
        py-2
				before:h-[2px]
				before:absolute
				before:bottom-0
				before:w-0
				before:bg-orange-main
				before:hover:w-full
				before:transition-[width]
				before:duration-300
				hover:text-orange-main
				before:z-[-1]
				transition
				duration-300
				ease-in-out
				${href === pathname ? 'text-orange-main before:w-full' : ''}
				${currentScroll >= 20 ? 'text-blue-main' : 'text-white'}
      `}>
				{label}
			</Link>
		</li>
	);
};

export default NavMenuItem;
