import Image from 'next/image';
import Container from '../Container';
import view from '@/public/view.webp';
import SectionHeading from '../SectionHeading';
import Button from '../Button';
import GoalsSlider from './GoalsSlider';

const Goals = () => {
	return (
		<section id='goals' className='goals h-auto w-full py-14 overflow-hidden'>
			<Container>
				<div className='flex justify-between items-center gap-x-8'>
					<div className='flex-1 flex flex-col justify-center items-center lg:inline-block '>
						<SectionHeading title='الرؤية والأهداف' subtitle='رواد الخبرة للاستشارات' />
						<p className='text-[#000060] break-words mb-5 inline-block'>
							رواد الخبرة للاستشارات أنشئت لخدمتكم وتحقيقا لتطلعاتكم، حيث نعتبر أنفسنا شركاء لكم
							مهتمين بنجاح مشاريعكم الاستثمارية وخططكم المستقبلية متمنين أن نساهم مع غيرنا في رفع
							مستوي الإقتصاد الوطني عموما ومشاريع عملاؤنا على وجه الخصوص نسعد أن نقدم للعميل دراسات
							الجدوى الإقتصادية بمهنية عالية, وإعداد مشاريع الحوكمة للشركات وبناء اللوائح والأنظمة
							الإدارية والمالية والتعليمية لكي تسهم في ضبط جودة الأداء، إضافة إالى سعينا في تأهيل
							شباب الأعمال والقيادات الإدارية من الجنسين لسوق العمل شاكرين ومقدرين ثقتكم بنا كشركاء
							لكم في بناء مشاريعكم الأستثمارية
						</p>
						<Button label='تعرف علي أهدفنا' />
					</div>
					<div className='flex-1 hidden lg:flex justify-center items-center'>
						<Image src={view} alt='view' width={500} height={0} priority />
					</div>
				</div>
			</Container>
			<GoalsSlider />
		</section>
	);
};

export default Goals;
