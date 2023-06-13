interface ContainerProps {
	children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div
			className='	
        w-[95%]
				sm:max-w-2xl
				md:max-w-4xl
        lg:max-w-6xl
				xl:max-w-[1500px]
				mx-auto
        '>
			{children}
		</div>
	);
};

export default Container;
