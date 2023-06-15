import wave from '@/public/200.png';
import Image from 'next/image';
import office from '@/public/Layer1.webp';
const Wave = () => {
	return (
		<div>
			<Image
				priority
				src={wave}
				alt='wave'
				width={0}
				height={0}
				className='w-full object-cover object-center h-auto z-10 absolute bottom-0 translate-y-[30%]'
			/>
			<div>
				<Image
					priority
					src={office}
					alt='wave'
					width={400}
					height={400}
					className='w-fit h-fit object-cover object-center z-20 absolute left-0 bottom-0 hidden lg:inline translate-y-[20%]'
				/>
			</div>
		</div>
	);
};

export default Wave;
