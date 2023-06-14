'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import img1 from '@/public/slider/1.webp';
import img2 from '@/public/slider/2.webp';
import img3 from '@/public/slider/3.webp';
import img4 from '@/public/slider/4.webp';
import img5 from '@/public/slider/5.webp';
import Wave from '../services/Wave';

const slideImages = [
	{ img: img1 },
	{ img: img2 },
	{ img: img3 },
	{ img: img4 },
	{ img: img5 },
	{ img: img5 },
];
const GoalsSlider = () => {
	const breakpoints = {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	};

	return (
		<section className='min-h-[60vh] w-screen flex justify-end items-center'>
			<Swiper
				slideNextClass='next-slide'
				spaceBetween={50}
				slidesPerView={3}
				navigation={true}
				autoplay={{ delay: 3000 }}
				modules={[Pagination, Navigation, Autoplay]}
				breakpoints={breakpoints}
				className='mySwiper'>
				{slideImages.map((slide, i) => (
					<SwiperSlide key={i} className=''>
						<div className='w-full h-[50vh] rounded'>
							<Image
								src={slide.img}
								width={0}
								height={0}
								alt={''}
								title={''}
								priority
								className='object-cover object-center w-full h-full'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default GoalsSlider;
