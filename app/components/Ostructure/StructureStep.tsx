'use client';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface StructureStepProps {
	number: number;
	label: string;
	image: StaticImageData;
	translate: boolean;
	index: number;
}

const StructureStep: React.FC<StructureStepProps> = ({
	number,
	image,
	label,
	translate,
	index,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 10 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, delay: 0.35 * index }}
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
		</motion.div>
	);
};

export default StructureStep;
