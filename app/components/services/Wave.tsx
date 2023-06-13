import wave from '@/public/200.png';
import Image from 'next/image';
import office from '@/public/Layer1.webp';
const Wave = () => {
	return (
		<div>
			<Image
				src={wave}
				alt='wave'
				width={0}
				height={0}
				className='w-full object-cover object-center h-auto z-50 absolute bottom-0 translate-y-[30%]'
			/>
			<Image
				src={office}
				alt='wave'
				width={650}
				height={0}
				className='object-cover object-center h-auto z-50 absolute left-0 bottom-0 translate-y-[20%]'
			/>
		</div>
	);
};

export default Wave;