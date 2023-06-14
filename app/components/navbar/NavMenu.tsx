import NavMenuItem from './NavMenuItem';

const Navlinks = [
	{ label: 'الرئيسية', href: '/' },
	{ label: 'الرؤيةوالرسالة', href: '#goals' },
	{ label: 'عملاؤنا', href: '#clients' },
	{ label: 'الهيكل التنظيمي', href: '#clients' },
	{ label: 'من نحن', href: '#clients' },
	{ label: 'اتصل بنا', href: '#contact' },
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
