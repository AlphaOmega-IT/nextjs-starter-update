
"use client";

import { Button } from "@/once-ui/components";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useState } from "react";

interface ScrollDownProps {
	className?: string;
	icon?: string;
	animateOffset?: number;
	duration?: number;
	ariaLabel?: string;
	variant?: "tertiary" | "primary" | "secondary" | "danger";
}

const ScrollDown = ({
	                    className = "absolute bottom-8",
	                    icon = "chevronDown",
	                    animateOffset = 20,
	                    duration = 1200,
	                    ariaLabel = "Scroll down",
	                    variant = "secondary",
                    }: ScrollDownProps) => {
	const { scrollY } = useScroll();
	const [isVisible, setIsVisible] = useState(true);
	const opacity = useTransform(scrollY, [0, 100], [1, 0]);
	const scale = useTransform(scrollY, [0, 100], [1, 0.8]);
	
	useMotionValueEvent(scrollY, "change", (latest) => {
		setIsVisible(latest < window.innerHeight * 0.8);
	});
	
	const handleClick = () => {
		const startY = window.scrollY;
		const nextSection = Math.ceil((startY + 1) / window.innerHeight) * window.innerHeight;
		const distance = nextSection - startY;
		const startTime = performance.now();
		
		function animateScroll(currentTime: number) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / (duration ?? 1200), 1);
			const ease = progress < 0.5
				? 2 * progress * progress
				: -1 + (4 - 2 * progress) * progress;
			
			window.scrollTo({
				top: startY + distance * ease,
				behavior: "auto",
			});
			
			if (progress < 1) {
				requestAnimationFrame(animateScroll);
			}
		}
		
		requestAnimationFrame(animateScroll);
	};
	
	return (
		<motion.div
			className={className}
			style={{
				opacity, scale, paddingBottom: "2rem",
			}}
			animate={{
				y: isVisible ? [0, animateOffset, 0] : 0,
				opacity: isVisible ? 1 : 0
			}}
			transition={{
				y: {
					duration: 2,
					repeat: Infinity,
					ease: "easeInOut"
				},
				opacity: { duration: 0.5 }
			}}
			aria-hidden="true"
		>
			<Button
				variant={variant}
				suffixIcon={icon}
				onClick={handleClick}
				aria-label={ariaLabel}
			/>
		</motion.div>
	);
};

export default ScrollDown;
