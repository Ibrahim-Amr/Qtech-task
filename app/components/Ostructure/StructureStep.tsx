import Image, { StaticImageData } from 'next/image';

interface StructureStepProps {
	number: number;
	label: string;
	image: StaticImageData;
	translate: boolean;
}

const StructureStep: React.FC<StructureStepProps> = ({ number, image, label, translate }) => {
	return (
		<div
			className={`flex flex-col justify-center items-center gap-y-5 ${
				translate ? 'pt-20' : 'pt-0'
			}`}>
			<div className='bg-[#424242] w-10 h-10 flex justify-center items-center rounded-full translate-x-full'>
				<span className='text-white text-[20px] font-medium'>{number}</span>
			</div>
			<div className='bg-gradient-to-b from-[#e57c15] to-[#ecc24a] rounded-full p-10 w-[150px] h-[150px] flex justify-center items-center'>
				<Image src={image} alt='goal1' height={75} width={75} priority />
			</div>
			<h3 className='text-blue-main font-bold text-xl'>{label}</h3>
			<p>
				إعداد دراسات الجدوى والبحوث العلمية والتطبيقية في المجالات الاقتصادية، والإدارية،
				والاكاديمية والتعليمية والرياضية.
			</p>
		</div>
	);
};

export default StructureStep;
