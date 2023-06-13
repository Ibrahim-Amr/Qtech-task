import Container from '../Container';
import SectionHeading from '../SectionHeading';
import Logo from '../navbar/Logo';

const AboutUs = () => {
	return (
		<section
			id='about'
			className='relative min-h-[60vh] h-auto w-full z-[50] py-14 xl:p-14 flex justify-center items-center'>
			<Container>
				<div className='flex flex-col justify-center items-center text-center'>
					<SectionHeading title='من نحن' subtitle='رواد الخبرة للاستشارات' center />
					<Logo />
					<p className='text-[#464241] sm:text-base font-semibold max-w-6xl mt-5'>
						رواد الخبرة للاستشارات أنشئت لخدمتكم وتحقيقا لتطلعاتكم، حيث نعتبر أنفسنا شركاء لكم
						مهتمين بنجاح مشاريعكم الاستثمارية وخططكم المستقبلية متمنين أن نساهم مع غيرنا في رفع
						مستوي الإقتصاد الوطني عموما ومشاريع عملاؤنا على وجه الخصوص نسعد أن نقدم للعميل دراسات
						الجدوى الإقتصادية بمهنية عالية, وإعداد مشاريع الحوكمة للشركات وبناء اللوائح والأنظمة
						الإدارية والمالية والتعليمية لكي تسهم في ضبط جودة الأداء، إضافة إالى سعينا في تأهيل شباب
						الأعمال والقيادات الإدارية من الجنسين لسوق العمل شاكرين ومقدرين ثقتكم بنا كشركاء لكم في
						بناء مشاريعكم الأستثمارية
					</p>
				</div>
			</Container>
		</section>
	);
};

export default AboutUs;
