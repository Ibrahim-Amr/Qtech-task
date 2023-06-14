import { IconType } from 'react-icons';

interface ContactInfoItemProps {
	label: string;
	icon?: IconType;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, label }) => {
	return (
		<li className='flex justify-between items-center gap-x-3 font-semibold hover:text-orange-main transition duration-200 ease-linear cursor-pointer'>
			{Icon && (
				<span>
					<Icon />
				</span>
			)}
			<span>{label}</span>
		</li>
	);
};

export default ContactInfoItem;
