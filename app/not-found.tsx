import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<section className='h-screen w-screen flex justify-center items-center font-[Chillax]'>
				<div className='uppercase text-center'>
					<p className='text-lg font-medium tracking-wider mb-5'>404</p>
					<h1 className='text-4xl font-medium tracking-wider mb-10'>Page not found</h1>
					<Link
						href={'/'}
						className='rounded-md py-4 px-6 bg-[#cebd63] hover:brightness-75 transition text-black'>
						Back To Homepage
					</Link>
				</div>
			</section>
		</>
	);
};

export default NotFound;
