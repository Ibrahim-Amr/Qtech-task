'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import Image from 'next/image';
import img1 from '@/public/slider/1.webp';
import img2 from '@/public/slider/2.webp';
import img3 from '@/public/slider/3.webp';
import img4 from '@/public/slider/4.webp';
import img5 from '@/public/slider/5.webp';
import Button from '../Button';
import Wave from '../services/Wave';
import { motion } from 'framer-motion';

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
								priority
								className='object-cover object-center w-full h-full relative brightness-[0.45]'
							/>
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								className='absolute inset-0 w-full text-white flex flex-col justify-center items-center lg:items-start gap-y-3 lg:pr-36'>
								<motion.h3
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3 }}
									className='text-xl sm:text-4xl font-bold'>
									مع رواد الخبرة للاستشارات{' '}
								</motion.h3>
								<motion.h4
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.2 }}
									className='text-lg sm:text-2xl font-semibold'>
									سوف تجد كل الحلول التى تناسبك{' '}
								</motion.h4>
								<motion.p
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: 0.4 }}
									className='text-base font-medium'>
									الاقتصادية - الإدارية - التعليمية والتربوية
								</motion.p>
								<Button label='تواصل معنا' />
							</motion.div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Wave />
		</section>
	);
};

export default Slider;
