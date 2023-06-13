import * as Yup from 'yup';

const YupSchema = Yup.object().shape({
	name: Yup.string()
		.min(5, 'الاسم يجب ان لا يقل عن 5 حروف')
		.max(200)
		.required('الاسم يجب ان لا يقل عن 5 حروف')
		.label('Name'),
	phone: Yup.string()
		.min(11, 'الرقم يجب ان لا يقل عن 11 رقم')
		.max(20)
		.required('الرقم يجب ان لا يقل عن 11 رقم')
		.label('Name'),
	email: Yup.string()
		.email('ادخل بريد صحيح')
		.min(5, 'البريد لا يمكن ان يكون فارغ')
		.max(200)
		.required()
		.label('Email'),
});

export default YupSchema;
