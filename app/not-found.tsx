import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<section className='h-screen w-screen flex justify-center items-center font-[Chillax] bg-gradient-to-b from-black to-neutral-800 text-white'>
				<div className='uppercase text-center'>
					<p className='text-2xl font-medium tracking-wider mb-5'>404</p>
					<h1 className='text-2xl font-medium tracking-wider mb-10'>هذه الصفحة غير موجودة</h1>
					<Link
						href={'/'}
						className='rounded-md py-4 px-6 bg-blue-main hover:brightness-75 transition text-white font-semibold text-base'>
						ارجع للصفحة الرئيسية
					</Link>
				</div>
			</section>
		</>
	);
};

export default NotFound;
