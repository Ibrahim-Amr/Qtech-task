import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Cairo } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import 'swiper/css/bundle';
import ScrollTop from './components/ScrollTop';
import ContextProvider from './ContextProvider';
import Sidebar from './components/Sidebar/Sidebar';

const font = Cairo({ subsets: ['latin'] });

export const metadata = {
	title: 'رواد الخبرة',
	description: 'رواد',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ar' dir='rtl' className='light antialiased'>
			<body className={font.className}>
				<ContextProvider>
					<Navbar />
					<main className='overflow-hidden'>{children}</main>
					<Toaster position='top-center' reverseOrder={false} />
					<Sidebar />
				</ContextProvider>
				<ScrollTop />
			</body>
		</html>
	);
}
