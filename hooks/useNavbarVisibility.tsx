'use client';
import { useState, useRef, useEffect } from 'react';

const useNavbarVisibility = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isScrollingUp = prevScrollPos.current > currentScrollPos;

		setIsNavbarVisible(isScrollingUp);
		prevScrollPos.current = currentScrollPos;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return isNavbarVisible;
};

export default useNavbarVisibility;
