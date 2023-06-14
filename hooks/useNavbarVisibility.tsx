'use client';
import { useState, useRef, useEffect } from 'react';

const useNavbarVisibility = () => {
	const [isNavbarVisible, setIsNavbarVisible] = useState(true);
	const [currentScroll, setCurrentScroll] = useState(0);
	const prevScrollPos = useRef(typeof window !== 'undefined' ? window.pageYOffset : 0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isScrollingUp = prevScrollPos.current > currentScrollPos;

		setCurrentScroll(currentScrollPos);
		setIsNavbarVisible(isScrollingUp);
		prevScrollPos.current = currentScrollPos;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return { isNavbarVisible, currentScroll };
};

export default useNavbarVisibility;
