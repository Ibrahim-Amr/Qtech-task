'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import Image from 'next/image';
import img1 from '@/public/slider/1.jpeg';
import img2 from '@/public/slider/2.jpeg';
import img3 from '@/public/slider/3.jpeg';
import img4 from '@/public/slider/4.jpeg';
import img5 from '@/public/slider/5.jpeg';
import Button from '../Button';
import Wave from '../services/Wave';

const slideImages = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }];
const Slider = () => {
	return (
		<section className='h-screen w-screen'>
			<Swiper
				slidesPerView={1}
				navigation={true}
				pagination={{
					type: 'progressbar',
				}}
				effect='fade'
				autoplay={{ delay: 3000 }}
				modules={[Pagination, Navigation, Autoplay, EffectFade]}
				className='mySwiper mb-6 overflow-hidden'>
				{slideImages.map((slide, i) => (
					<SwiperSlide key={i}>
						<div className='relative w-full overflow-hidden h-screen'>
							<Image
								src={slide.img}
								width={0}
								height={0}
								alt={''}
								title={''}
								loading='lazy'
								className='object-cover object-center w-full h-full relative brightness-[0.45]'
							/>
							<div className='absolute inset-0 w-full  text-white flex flex-col justify-center items-center lg:items-start gap-y-3 pr-36'>
								<h3 className='text-2xl font-bold'> مع رواد الخبرة للاستشارات </h3>
								<h4 className='text-lg font-semibold'> سوف تجد كل الحلول التى تناسبك </h4>
								<p className='text-sm font-medium'>الاقتصادية - الإدارية - التعليمية والتربوية</p>
								<Button label='تواصل معنا' />
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Wave />
		</section>
	);
};

export default Slider;
