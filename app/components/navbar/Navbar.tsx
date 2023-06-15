'use client';
import useNavbarVisibility from '@/hooks/useNavbarVisibility';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SocailMenu from './SocailMenu';
import ToggleMenu from './ToogleMenu';

const Navbar = () => {
	const { isNavbarVisible, currentScroll } = useNavbarVisibility();

	return (
		<header
			className={`
			fixed
			w-full
      h-auto
      py-5
			z-[100]
			${isNavbarVisible ? 'top-0' : 'top-0 sm:top-[-100%]'}
			${
				currentScroll >= 50
					? 'bg-white shadow-md transition ease-in-out text-blue-main'
					: 'bg-transparent shadow-none transition ease-in-out'
			}
			transition-[top]
			duration-300
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
				<ToggleMenu />
			</nav>
		</header>
	);
};

export default Navbar;
