'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Prop {
	setToggleMenu: any;
}
const SidebarBody: React.FC<Prop> = ({ setToggleMenu }) => {
	const pathname = usePathname();

	const links = [
		{ label: 'الرئيسية', href: '' },
		{ label: 'الرؤيةوالرسالة', href: '' },
		{ label: 'عملاؤنا', href: '' },
		{ label: 'الهيكل التنظيمي', href: '' },
		{ label: 'من نحن', href: '' },
		{ label: 'اتصل بنا', href: '' },
	];

	return (
		<section className='flex justify-between items-center h-full w-full'>
			<ul className='flex-1 flex flex-col gap-y-8 md:pl-40 text-start transition-[padding] pl-16 md:p-0'>
				{links.map((link) => (
					<li
						key={link.label}
						onClick={() => {
							setToggleMenu(false);
							document.body.classList.remove('overflow-hidden');
						}}>
						<Link
							href={link.href}
							className={`text-5xl  font-medium relative before:absolute before:h-[1px] before:right-0 before:bottom-0 before:w-0 hover:before:w-full before:bg-[#ffc330] before:transition-[width] before:duration-200 before:ease-in-out hover:brightness-75 transition duration-200 ease-in-out
							${link.href === pathname && 'brightness-75 before:w-full'}
							`}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SidebarBody;
