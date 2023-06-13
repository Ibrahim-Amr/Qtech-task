interface HeadingsProps {
	title: string;
	subtitle: string;
	center?: boolean;
}
const SectionHeading: React.FC<HeadingsProps> = ({ title, subtitle, center }) => {
	return <div>SectionHeading</div>;
};

export default SectionHeading;
