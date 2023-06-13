'use client';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
	id: string;
	label: string;
	type?: string;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors | any;
}
const Input: React.FC<Props> = ({ id, label, type, register, errors }) => {
	return (
		<div
			className={`
        relative
        font-[Jost]
        w-full
        mb-5
        `}>
			<input
				type={type}
				{...register(id)}
				id={id}
				placeholder={label}
				className={` 
          w-full
          text-sm
          font-medium
          bg-white
          bg-transparent
					ring-0
					focus:ring-0
          outline-none
          focus:outline-none
          transition
          ${errors[id] ? 'border-rose-500 ring-red-500 focus:ring-red-500' : 'border-white/70'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-white'}
          `}
			/>
			{errors[id] && (
				<p className='text-white text-xs sm:text-base font-semibold'>{errors[id]?.message}</p>
			)}
		</div>
	);
};

export default Input;
