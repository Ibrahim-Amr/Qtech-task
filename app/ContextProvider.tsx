'use client';
import { StoreProvider } from '@/context/Context';

interface Props {
	children: React.ReactNode;
}
const ContextProvider: React.FC<Props> = ({ children }) => {
	return <StoreProvider>{children}</StoreProvider>;
};

export default ContextProvider;
