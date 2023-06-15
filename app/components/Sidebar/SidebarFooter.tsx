import Link from 'next/link';

const SidebarFooter: React.FC = () => {
	return (
		<footer className='flex justify-between items-center border-t border-white/20 py-12 px-2 leading-6 font-medium uppercase tracking-widest'>
			<div className='flex justify-between md:justify-center items-center gap-x-6 w-full md:w-fit'>
				<Link
					className='hover:brightness-75'
					href={'https://www.linkedin.com/in/ibrahim-omar-883156253/'}
					target='_blank'>
					LINKEDIN
				</Link>
				<Link
					className='hover:brightness-75'
					href={'https://github.com/Ibrahim-Amr'}
					target='_blank'>
					Github
				</Link>
				<Link
					className='hover:brightness-75'
					href={'mailto:ebrahimamra69@gmail.com'}
					target='_blank'>
					mail
				</Link>
			</div>
			<div className='hidden md:inline-block text-white/60'>
				© MADE BY
				<Link
					href={'https://www.linkedin.com/in/ibrahim-omar-883156253/'}
					className='text-white px-1'>
					Ibrahim Omar
				</Link>
				- POWERED BY
				<Link href={'https://nextjs.org/'} className='text-white  px-1'>
					Next.js
				</Link>
			</div>
		</footer>
	);
};

export default SidebarFooter;
