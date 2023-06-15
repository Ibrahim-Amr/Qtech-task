import { createContext, ReactNode, useState } from 'react';

interface StoreType {
	toggleMenu: boolean;
	setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Store = createContext<StoreType | null>(null);

interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false);

	const storeValue: StoreType = {
		toggleMenu,
		setToggleMenu,
	};

	return <Store.Provider value={storeValue}>{children}</Store.Provider>;
};

export default Store;
