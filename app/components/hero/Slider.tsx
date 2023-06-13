'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import Image from 'next/image';
import img1 from '@/public/slider/1.jpeg';
import img2 from '@/public/slider/2.jpeg';
import img3 from '@/public/slider/3.jpeg';
import img4 from '@/public/slider/4.jpeg';
import img5 from '@/public/slider/5.jpeg';

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
				{slideImages.map((slide) => (
					<SwiperSlide>
						<div className='relative w-full overflow-hidden h-screen cursor-pointer'>
							<Image
								src={slide.img}
								width={0}
								height={0}
								alt={''}
								title={''}
								loading='lazy'
								className='object-cover object-center w-full h-full relative'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Slider;
