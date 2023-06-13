interface HeadingsProps {
	title: string;
	subtitle: string;
	center?: boolean;
	mCenter?: boolean;
}
const SectionHeading: React.FC<HeadingsProps> = ({ title, subtitle, center, mCenter }) => {
	return (
		<div
			className={`
				w-fit
				mb-10
				${center ? 'text-center' : 'text-center lg:text-start'}
			`}>
			<h4 className='text-orange-main text-base font-medium mb-4'>{title}</h4>
			<h2
				className={`
				text-blue-main
				text-lg
				font-bold
				relative
				before:absolute
				before:-bottom-1/2
				before:h-1
				before:w-[55%]
				before:bg-blue-main
				${
					center
						? 'before:right-1/2 before:translate-x-1/2'
						: 'before:right-1/2 before:translate-x-1/2 lg:before:right-0 lg:before:translate-x-0'
				}
				before:transition
				before:duration-200
				before:ease-in-out
				transition
				duration-200
				ease-in-out
				`}>
				{subtitle}
			</h2>
		</div>
	);
};

export default SectionHeading;
