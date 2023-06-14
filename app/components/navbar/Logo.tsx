import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo-sm.webp';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src={logo} alt='logo' width={65} height={65} priority className='w-full h-full' />
		</Link>
	);
};

export default Logo;
