import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Cairo } from 'next/font/google';
import 'swiper/css';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';

import 'swiper/css/bundle';

const font = Cairo({ subsets: ['latin'] });

export const metadata = {
	title: 'Qtech',
	description: 'Qtech',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ar' dir='rtl' className='light antialiased'>
			<body className={font.className}>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
