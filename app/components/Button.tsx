import Link from 'next/link';

interface ButtonProps {
	label: string;
	href?: string;
}
const Button: React.FC<ButtonProps> = ({ label, href }) => {
	return (
		<>
			{href ? (
				<Link
					href={href}
					className='
        bg-blue-main
          text-base
          font-normal
          px-10
          py-2'>
					{label}
				</Link>
			) : (
				<button
					className='
        bg-blue-main
          text-base
          font-normal
					px-12
          py-4
					rounded-xl
					hover:bg-orange-main
					transition
					duration-200
					ease-linear
      '>
					{label}
				</button>
			)}
		</>
	);
};

export default Button;
