'use client';

import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import { useContext } from 'react';
import Store from '@/context/Context';

const Sidebar = () => {
	const { setToggleMenu, toggleMenu } = useContext<any>(Store);

	return (
		<div
			className={`
				side-bar
				${toggleMenu ? 'top-0 md:hidden' : 'top-[-115%]'}
				transition-[top]
				duration-500
				ease-in-out
				z-[999999]
				
			`}>
			<div
				className='
          h-full
          w-[95%]
					sm:max-w-2xl
					md:max-w-4xl
          lg:max-w-6xl
					xl:max-w-[1800px]
          mx-auto
          flex flex-col justify-between
        '>
				<SidebarHeader setToggleMenu={setToggleMenu} />
				<SidebarBody setToggleMenu={setToggleMenu} />
				<SidebarFooter />
			</div>
		</div>
	);
};

export default Sidebar;
