'use client';
import useNavbarVisibility from '@/hooks/useNavbarVisibility';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SocailMenu from './SocailMenu';

const Navbar = () => {
	const isNavbarVisible = useNavbarVisibility();

	return (
		<header
			className={`
			fixed
			w-full
      h-auto
			z-50
			text-[#1e1e1e]
			${isNavbarVisible ? 'top-0' : 'top-0 sm:top-[-85px]'}
			transition-[top]
			duration-300
			ease-in-out
      py-5
			`}>
			<nav
				className='
						w-[95%]
						sm:max-w-2xl
						md:max-w-4xl
            lg:max-w-6xl
						xl:max-w-[1800px]
            mx-auto
            flex 
            flex-row 
            items-center 
            justify-between
            gap-x-3
          '>
				<Logo />
				<NavMenu />
				<SocailMenu />
			</nav>
		</header>
	);
};

export default Navbar;
