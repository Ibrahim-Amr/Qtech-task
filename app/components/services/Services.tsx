import Container from '../Container';
import ServicesCard from './ServicesCard';
import serv1 from '@/public/servicesIcon1.png';
import serv2 from '@/public/servicesIcon2.png';
import serv3 from '@/public/servicesIcon3.png';
import serv4 from '@/public/servicesIcon4.png';

const services = [
	{
		title: 'استشارات',
		subtitle:
			'تقديم الاستشارات الاقتصادية، والإدارية، والتربوية والتعليمية للقطاعين العام والخاص والقطاع الغير ربحي.',
		image: serv1,
	},
	{
		title: 'دراسات',
		subtitle:
			'إعداد دراسات الجدوى والبحوث العلمية والتطبيقية في المجالات الاقتصادية، والإدارية، والاكاديمية والتعليمية والرياضية.',
		image: serv2,
	},
	{
		title: 'تطوير',
		subtitle:
			'تطوير الأنظمة والسياسات واللوائح في المؤسسات والشركات بالقطاع الخاص والعام والخيري وبناء الأنظمة للمؤسسات أو الشركات الجديدة في القطاعات المختلفة .',
		image: serv3,
	},
	{
		title: 'تأهيل',
		subtitle: 'إعداد مشاريع الحوكمة للشركات والمنظمات والتأهل للحصول على شهادات الآيزو',
		image: serv4,
	},
];

const Services = () => {
	return (
		<section id='services' className='relative h-auto w-full z-[60] py-14 xl:p-14'>
			<Container>
				<div className='grid sm:grid-cols-2 gap-x-[30px] mb-10'>
					{services.map((serv, i) => (
						<ServicesCard
							key={serv.title}
							title={serv.title}
							subtitle={serv.subtitle}
							image={serv.image}
							index={i}
						/>
					))}
				</div>
				<div className='w-full text-center text-[#333] text-base font-medium'>
					<p className=''>
						تعرف على جميع خدماتنا
						<span className='text-blue-main hover:text-orange-main transition ease-linear underline cursor-pointer'>
							من هنا
						</span>
					</p>
				</div>
			</Container>
		</section>
	);
};

export default Services;
