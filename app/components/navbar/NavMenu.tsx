import NavMenuItem from './NavMenuItem';

const Navlinks = [
	{ label: 'الرئيسية', href: '' },
	{ label: 'الرؤيةوالرسالة', href: '' },
	{ label: 'عملاؤنا', href: '' },
	{ label: 'الهيكل التنظيمي', href: '' },
	{ label: 'من نحن', href: '' },
	{ label: 'اتصل بنا', href: '' },
];
const NavMenu = () => {
	return (
		<div
			className='
				hidden 
				md:block
				opacity-0
				md:opacity-100
				h-full
				transition-opacity
				duration-200
				ease-in-out
        '>
			<ul
				className='
					flex
          items-center
          justify-center
					gap-10
				'>
				{Navlinks.map((item, index) => {
					return <NavMenuItem key={index} label={item.label} href={item.href} />;
				})}
			</ul>
		</div>
	);
};

export default NavMenu;
