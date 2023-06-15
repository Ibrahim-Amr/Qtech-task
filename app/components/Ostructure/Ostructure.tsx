import Container from '../Container';
import SectionHeading from '../SectionHeading';
import StructureStep from './StructureStep';
import step1 from '@/public/management.webp';
import step2 from '@/public/teamwork.webp';
import step3 from '@/public/work.webp';
import step4 from '@/public/partnership.webp';

const steps = [
	{
		labe: 'التخطيط',
		image: step1,
		translate: false,
	},
	{
		labe: 'التنظيم',
		image: step2,
		translate: true,
	},
	{
		labe: 'التوجيه',
		image: step3,
		translate: false,
	},
	{
		labe: 'الرقابة',
		image: step4,
		translate: true,
	},
];
const Ostructure = () => {
	return (
		<section
			id='Ostructure'
			className='relative min-h-[60vh] h-auto w-full z-[50] py-14 xl:p-14 flex justify-center items-center'>
			<Container>
				<div className='flex flex-col justify-center items-center text-center'>
					<SectionHeading title='الهيكل التنظيمى' subtitle='رواد الخبرة للاستشارات' center />
					<div className='grid grid-cols-2 lg:grid-cols-4  justify-between items-center flex-nowrap gap-10 w-full'>
						{steps.map((step, i) => (
							<StructureStep
								key={i}
								number={i + 1}
								label={step.labe}
								image={step.image}
								translate={step?.translate}
								index={i}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Ostructure;
