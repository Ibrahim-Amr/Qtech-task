import Image, { StaticImageData } from 'next/image';

interface ServicesCardProps {
	image: StaticImageData;
	title: string;
	subtitle: string;
}
const ServicesCard: React.FC<ServicesCardProps> = ({ image, title, subtitle }) => {
	return (
		<div className='w-full py-[10px] flex flex-col lg:flex-row justify-center items-center'>
			<div className='relative flex-1'>
				<svg
					className='pouple min-w-[250px] w-full'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 300 200'>
					<path
						d='M43.82,32c-62.91,43.27,9.78,157.21,150.4,151.87,92.86-3.53,111-121.06,42.08-129.08C148.65,44.55,109.16-13,43.82,32Z'
						data-original='M43.82,32c-62.91,43.27,9.78,157.21,150.4,151.87,92.86-3.53,111-121.06,42.08-129.08C148.65,44.55,109.16-13,43.82,32Z'
						fill='#EFEFEF'></path>
				</svg>
				<Image
					src={image}
					alt={title}
					width={75}
					height={75}
					className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 '
				/>
			</div>
			<div className='flex-1 text-center lg:text-start'>
				<h2 className='text-lg font-bold'>{title}</h2>
				<p>{subtitle}</p>
			</div>
		</div>
	);
};

export default ServicesCard;
