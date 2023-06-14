import SectionHeading from '../SectionHeading';
import Form from './Form';

const Contact = () => {
	return (
		<section
			id='contact'
			className='
				relative 
				h-auto 
				w-full 
				z-[50] 
				flex 
				justify-center 
				items-center
          '>
			<div className='flex flex-col-reverse lg:flex-row justify-between items-center w-full h-full'>
				<div className='group flex-1 min-h-[55vh] flex justify-center items-center w-full h-full'>
					<iframe
						title='location on google map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.74420350149!2d43.93824771148095!3d26.367134283226747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f57e9fbb23753%3A0xdafb3a2d8a234ce!2z2LHZiNin2K8g2KfZhNiu2KjYsdipINmE2YTYp9iz2KrYtNin2LHYp9iqINin2YTYp9iv2KfYsdmK2KnYjCDYp9mE2KfZgtiq2LXYp9iv2YrYqdiMINin2YTYqti52YTZitmF2YrYqQ!5e0!3m2!1sen!2sus!4v1686694598505!5m2!1sen!2sus'
						width='100%'
						height='100%'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className='object-cover min-h-[55vh] group-hover:brightness-50 brightness-[0.3] transition ease-in-out'></iframe>
				</div>
				<div
					id='contact-form'
					className='
            min-h-[55vh]
            px-10
            flex-1
            flex
            flex-col
            justify-center
            items-start
            w-full
						relative
						before:absolute
						before:inset-0
					before:bg-black/60
          '>
					<SectionHeading
						title='تواصل مع رواد الخبرة للاستشارات'
						subtitle='رواد الخبرة للاستشارات'
						white
					/>
					<Form />
				</div>
			</div>
		</section>
	);
};

export default Contact;
