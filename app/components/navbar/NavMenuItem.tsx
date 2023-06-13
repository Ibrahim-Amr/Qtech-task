'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavitemProps {
	href: string;
	label: string;
}

const NavMenuItem: React.FC<NavitemProps> = ({ href, label }) => {
	const pathname = usePathname();

	return (
		<li title={label}>
			<Link
				href={href}
				className={`
				block
        text-sm
        font-bold
				relative
        py-2
				before:h-[1px]
				before:absolute
				before:bottom-0
				before:w-0
				before:bg-orange-main
				before:hover:w-full
				before:transition-[width]
				before:duration-300
				hover:text-[#1e1e1e]
				before:z-[-1]
				transition
				duration-300
				ease-in-out
				${href === pathname ? 'text-orange-main' : 'text-blue-main'}
				${href === pathname ? 'bg-white' : 'bg-transparent'}
      `}>
				{label}
			</Link>
		</li>
	);
};

export default NavMenuItem;
