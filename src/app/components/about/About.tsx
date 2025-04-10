"use client";

import {
	Avatar,
	Column,
	Flex,
	Heading,
	Text,
	Badge,
	Row,
	Background,
	RevealFx,
	Icon
} from "@/once-ui/components";
import React, { useEffect, useState, useRef } from "react";
import styles from "./About.module.scss";

const techBadges = [
	{
		icon: "code",
		text: "Full-Stack Entwicklung",
		color: "brand-solid-medium"
	},
	{
		icon: "puzzle",
		text: "Individuelle Lösungen",
		color: "accent-solid-medium"
	},
	{
		icon: "shield",
		text: "Sichere Architekturen",
		color: "brand-solid-medium"
	},
	{
		icon: "database",
		text: "Datenbankdesign",
		color: "accent-solid-medium"
	},
	{
		icon: "mobile",
		text: "Responsive Webapps",
		color: "brand-solid-medium"
	},
	{
		icon: "rocket",
		text: "High-Performance Apps",
		color: "accent-solid-medium"
	},
	{
		icon: "game",
		text: "Spieleentwicklung",
		color: "brand-solid-medium"
	},
];

// Enhanced stats with icons and descriptions
const statsData = [
	{
		value: "100%",
		label: "Individuelle Lösungen",
		icon: "fingerprint",
		description: "Jedes Projekt ist einzigartig"
	},
	{
		value: "24h",
		label: "Supportbereitschaft",
		icon: "headset",
		description: "Immer für Dich erreichbar"
	},
	{
		value: "2k+",
		label: "Code Commits",
		icon: "git-branch",
		description: "Kontinuierliche Verbesserung"
	},
	{
		value: "∞",
		label: "Kreativität",
		icon: "lightbulb",
		description: "Grenzenlose Ideen"
	},
	{
		value: "<1s",
		label: "Ladezeiten",
		icon: "zap",
		description: "Optimierte Performance"
	},
	{
		value: "5+",
		label: "Jahre Erfahrung",
		icon: "calendar",
		description: "Wachsende Expertise"
	},
];

export const About = () => {
	const [scrollY, setScrollY] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const [isAvatarHovered, setIsAvatarHovered] = useState(false);
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};
		
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	
	return (
		<Column
			fillWidth
			horizontal="center"
			gap="80"
			paddingY="xl"
			className={styles.aboutSection}
		>
			<RevealFx
				translateY="m"
				delay={0.6}
				fillWidth
				horizontal="center"
				paddingBottom="s"
				zIndex={1}
			>
				<Column
					fillWidth
					horizontal="center"
					className={styles.avatarContainer}
				>
					{/* Enhanced Avatar Container with Hover Effect */}
					<div
						className={`${styles.avatarExpandContainer} ${isAvatarHovered ? styles.hovered : ''}`}
						onMouseEnter={() => setIsAvatarHovered(true)}
						onMouseLeave={() => setIsAvatarHovered(false)}
					>
						{/* Left side content that appears on hover */}
						<div className={styles.avatarSideContent}>
							<Text variant="body-default-m" className={styles.avatarSideText}>
								<Icon name="quote" size="m" className={styles.quoteIcon} />
								Mein Ziel ist es, für Dich digitale Erlebnisse zu schaffen, die nicht nur funktional sind, sondern Dich und Deine Kunden wirklich begeistern.
								<span className={styles.signature}>- Justin</span>
							</Text>
						</div>
						
						{/* Avatar with orbit effect */}
						<Avatar
							src="/images/avatar/avatar_1.jpg"
							size="xl"
							radius="l-4"
							border="brand-alpha-strong"
							borderWidth={2}
							statusIndicator={{ color: "green" }}
							className={styles.techAvatar}
						/>
					</div>
					
					<div className={styles.orbitingIcons}>
						{['code', 'database', 'mobile', 'game'].map((iconName, i) => (
							<div
								key={iconName}
								className={styles.orbitIcon}
								style={{
									animationDelay: `${i * 0.5}s`,
									transform: `rotate(${i * 90}deg) translateX(80px)`
								}}
							>
								<Icon name={iconName} size="m" onBackground="brand-strong" />
							</div>
						))}
					</div>
				</Column>
			</RevealFx>
			
			<Column gap="l" zIndex={2} fillWidth maxWidth="m"> {/* Reduced width */}
				<RevealFx translateY="m" delay={0.8} fillWidth horizontal="center" zIndex={2}>
					<Heading as="h2" variant="display-strong-m" align="center" className={styles.glitchText}>
						Digitale Lösungen mit Herz
					</Heading>
				</RevealFx>
				
				<RevealFx translateY="m" delay={1.0} fillWidth horizontal="center" zIndex={2}>
					<Text align="center" variant="body-default-l" onBackground="neutral-strong" className={styles.bioText}>
						<p className={styles.greeting}>Hey! Schön, dass Du hier bist.</p>
						
						Ich bin <span className={styles.highlight}>Justin, 25</span>, ein leidenschaftlicher Fullstack-Entwickler mit einem Auge fürs Detail. Wenn Du eine maßgeschneiderte Weblösung suchst, die sich von der Masse abhebt, bist Du bei mir genau richtig.
						
						<p className={styles.paragraph}>
							Meine Spezialgebiete umfassen <span className={styles.keyword}>Java/Hibernate</span> für robuste Backend-Systeme sowie moderne Frontend-Frameworks wie <span className={styles.keyword}>Vue.js</span>, <span className={styles.keyword}>React</span> und <span className={styles.keyword}>Angular</span>. Ich liebe es, diese Technologien zu kombinieren, um für Dich einzigartige digitale Erlebnisse zu schaffen.
						</p>
						
						<div className={styles.emphasisText}>
							Was mich von anderen unterscheidet? Ich glaube nicht an Einheitslösungen wie WordPress-Templates. Stattdessen entwickle ich für Dich individuelle Webprojekte, die genau auf Deine Bedürfnisse und Ziele zugeschnitten sind.
						</div>
						
						<p className={styles.paragraph}>
							Neben Webentwicklung konzipiere ich auch <span className={styles.keyword}>Lizenzierungssysteme</span> für Software und entwickle <span className={styles.keyword}>Minecraft-Plugins</span> – immer mit dem Fokus auf Qualität, Performance und Benutzerfreundlichkeit. Dein Projekt verdient nichts weniger als Exzellenz.
						</p>
						
						<p className={styles.closingText}>
							Lass uns gemeinsam Deine Vision zum Leben erwecken!
						</p>
					</Text>
				</RevealFx>
				
				{/* Carousel remains unchanged */}
				<RevealFx translateY="l" delay={1.2} fillWidth horizontal="center" paddingBottom="s" zIndex={2}>
					<Row gap="m" direction="column" center>
						<Column className={styles.container}>
							<Flex
								ref={scrollContainerRef}
								gap="m"
								padding="s"
								className={`${styles.scrollContainer} ${isPaused ? styles.paused : ''}`}
								onMouseEnter={() => setIsPaused(true)}
								onMouseLeave={() => setIsPaused(false)}
							>
								{[...techBadges, ...techBadges].map((badge, index) => (
									<Badge
										key={`badge-item-${index}`}
										background="accent-alpha-weak"
										textVariant="body-default-s"
										icon={badge.icon}
										color={badge.color}
										className={styles.badge}
										effect={true}
									>
										{badge.text}
									</Badge>
								))}
							</Flex>
							
							<div className={styles.carouselControls}>
								<button
									className={styles.carouselControl}
									onClick={() => {
										if (scrollContainerRef.current) {
											scrollContainerRef.current.scrollLeft -= 200;
										}
									}}
									aria-label="Scroll left"
								>
									<Icon name="chevron-left" size="s" />
								</button>
								<button
									className={styles.carouselControl}
									onClick={() => {
										if (scrollContainerRef.current) {
											scrollContainerRef.current.scrollLeft += 200;
										}
									}}
									aria-label="Scroll right"
								>
									<Icon name="chevron-right" size="s" />
								</button>
							</div>
						</Column>
					</Row>
				</RevealFx>
				
				{/* Enhanced Stats Section */}
				<RevealFx translateY="m" delay={1.4} fillWidth zIndex={2}>
					<div className={styles.statsGrid}>
						{statsData.map((stat, index) => (
							<RevealFx key={`stat-${index}`} delay={1.4 + index * 0.1} translateY="s">
								<div className={styles.statCard}>
									<div className={styles.statIconWrapper}>
										<Icon name={stat.icon} size="m" className={styles.statIcon} />
									</div>
									<Text variant="display-strong-m" className={styles.statValue}>
										{stat.value}
									</Text>
									<Text variant="label-default-s" className={styles.statLabel}>
										{stat.label}
									</Text>
									<Text variant="body-default-xs" className={styles.statDescription}>
										{stat.description}
									</Text>
								</div>
							</RevealFx>
						))}
					</div>
				</RevealFx>
				
				<RevealFx translateY="m" delay={1.6} fillWidth horizontal="center" zIndex={2}>
					<Badge
						title="Lass uns Dein Projekt starten"
						icon="rocket"
						href="/contact"
						className={styles.ctaBadge}
						effect={true}
					/>
				</RevealFx>
			</Column>
		</Column>
	);
};