'use client';
import Store from '@/context/Context';
import { useContext } from 'react';
import { BiPlus } from 'react-icons/bi';

const ToggleMenu = () => {
	const { setToggleMenu } = useContext<any>(Store);

	return (
		<div
			onClick={() => {
				setToggleMenu(true);
				document.body.classList.add('overflow-hidden');
			}}
			className={`
        text-sm
        font-bold
				text-blue-main
        tracking-wider
        uppercase
				flex
        md:hidden
        justify-center
        items-center
        gap-x-1
        cursor-pointer
				transition-[display]
				duration-200 
				ease-in-out
      `}>
			<p>قائمة</p>
			<BiPlus />
		</div>
	);
};

export default ToggleMenu;
