'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './Input';
import YupSchema from '@/Schema';
import { toast } from 'react-hot-toast';

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading, isSubmitting },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
		},
		resolver: yupResolver(YupSchema),
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		toast.success('تم تسجيل بنجاح');
		reset();
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='z-50 w-full'>
			<div className='flex justify-center items-center gap-x-5'>
				<Input id='name' label='الاسم' type='text' register={register} errors={errors} />
				<Input id='phone' label='رقم الجوال' type='text' register={register} errors={errors} />
			</div>
			<Input id='email' label='البريد الالكتروني' type='text' register={register} errors={errors} />
			<button
				disabled={isLoading || isSubmitting}
				className='
        bg-blue-main
					text-white
          text-base
          font-normal
					px-12
          py-4
					rounded-xl
					shadow
					hover:shadow-lg
					hover:bg-orange-main
					transition
					duration-200
					ease-linear
					disabled:brightness-50
      '>
				ارسال
			</button>
		</form>
	);
};

export default Form;
