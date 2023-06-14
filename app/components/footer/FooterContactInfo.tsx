import { IconType } from 'react-icons';
import ContactInfoItem from './ContactInfoItem';

interface FooterContactInfoProps {
	list: { label: string; icon?: IconType }[];
}
const FooterContactInfo: React.FC<FooterContactInfoProps> = ({ list }) => {
	return (
		<div className='w-fit'>
			<h3 className='w-fit font-bold text-sm mb-7 relative before:absolute before:h-1 before:-bottom-3 before:w-full before:bg-orange-main'>
				معلومات التواصل
			</h3>
			<ul className='flex flex-col justify-center items-start gap-y-3'>
				{list.map((list) => (
					<ContactInfoItem key={list.label} label={list.label} icon={list.icon} />
				))}
			</ul>
		</div>
	);
};

export default FooterContactInfo;
