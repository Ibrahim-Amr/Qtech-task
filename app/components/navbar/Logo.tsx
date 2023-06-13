import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo-sm.webp';

const Logo = () => {
	return (
		<Link href={'/'}>
			<Image src={logo} alt='logo' width={50} height={0} />
		</Link>
	);
};

export default Logo;
