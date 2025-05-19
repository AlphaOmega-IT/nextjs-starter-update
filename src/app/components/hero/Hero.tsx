"use client";

import React, { useEffect, useState } from "react";
import {
	Button,
	Column,
	Heading,
	TiltFx,
	Flex,
	OgCard,
	RevealFx,
	Badge,
	Text,
} from "@/once-ui/components";
import { TechCarousel } from "@/app/components/techcarousel/TechCarousel";
import ScrollDown from "@/app/components/scrolldown/ScrollDown";

/**
 * Custom hook to detect if device is mobile based on viewport width.
 */
function useIsMobile(breakpoint = 768): boolean {
	const [isMobile, setIsMobile] = useState<boolean>(
		typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
	);

	useEffect(() => {
		const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [breakpoint]);

	return isMobile;
}

const Hero = () => {
	const techStack = [
		{ name: "Java", icon: "java" },
		{ name: "Spring Boot", icon: "spring" },
		{ name: "Hibernate", icon: "hibernate" },
		{ name: "React", icon: "react" },
		{ name: "Angular", icon: "angular" },
		{ name: "Vue", icon: "vue" },
		{ name: "Node.js", icon: "node" },
		{ name: "PostgreSQL", icon: "postgres" },
		{ name: "MySQL", icon: "mysql" },
		{ name: "MongoDB", icon: "mongo" },
		{ name: "Docker", icon: "docker" },
		{ name: "Git", icon: "git" },
	];

	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Flex
				fill
				direction="column"
				center
				style={{
					minHeight: "100vh",
				}}
			>
				<Column fillWidth gap="m" center>
					<RevealFx fillWidth speed="fast" translateY={4} center>
						<Badge
							href="#contact"
							background="brand-weak"
							onBackground="brand-strong"
							textVariant="label-default-s"
							icon="sparkle"
						>
							<Text variant="body-default-s">
								Maßgeschneiderte Lösungen seit 2017
							</Text>
						</Badge>
					</RevealFx>

					<RevealFx speed="fast" delay={0.2} translateY={6} center>
						<Heading variant="display-strong-l" align="center">JExcellence</Heading>
					</RevealFx>

					<RevealFx speed="fast" delay={0.4} translateY={10} marginBottom="8" center>
						<Text variant="heading-default-m" onBackground="neutral-medium" align="center">
							Deine Vision, Unser Code.
						</Text>
					</RevealFx>

					<RevealFx speed="fast" delay={0.6} translateY={12} marginBottom="12" center direction="column">
						<Text variant="body-default-m" align="center">
							Innovative Web- und Softwareentwicklung,
						</Text>
						<Text>
							die Ihre Ideen zum Leben erweckt.
						</Text>
					</RevealFx>

					<RevealFx speed="fast" delay={0.8} translateY={14} center>
						<Flex gap="8" vertical="center" wrap>
							<Button href="#contact" size="m" variant="primary" suffixIcon="chevronRight">
								Kostenloses Gespräch
							</Button>
							<Button href="#portfolio" size="m" variant="tertiary" weight="default">
								Referenzen ansehen
							</Button>
						</Flex>
					</RevealFx>

					<RevealFx speed="fast" delay={1.0} translateY={16} paddingX="xl" paddingTop="xl">
						<TechCarousel items={techStack} spacing="l" />
					</RevealFx>


					<RevealFx speed="fast" delay={1.2} translateY={12} paddingX="xl">
						<OgCard
							ogData={{
								title: "LM Beauty | Wimpernstudio",
								description: "Einblick in ein aktuelles Projekt und eine maßgeschneiderte Lösung.",
								image: "/images/lmbeauty/desktop_lmbeauty.svg",
								faviconUrl: "/images/lmbeauty/favicon-32x32.png",
								url: "https://lmbeauty.de"
							}}
							direction="column"
						/>
					</RevealFx>
				</Column>
			</Flex>
		);
	}

	// --- Desktop view: original layout remains unchanged ---
	return (
		<Flex
			fill
			direction="row"
			tabletDirection="column"
			style={{
				height: "100vh"
			}}
		>
			<Column
				maxWidth={45}
				gap="24"
				padding="s"
			>
				<RevealFx speed="fast" translateY={4} paddingBottom="12">
					<Badge
						href="#contact"
						background="brand-weak"
						onBackground="brand-strong"
						textVariant="label-default-s"
						icon="sparkle"
					>
						Maßgeschneiderte Lösungen seit 2017
					</Badge>
				</RevealFx>

				<RevealFx speed="fast" delay={0.2} translateY={8}>
					<Heading variant="display-strong-xl">JExcellence</Heading>
				</RevealFx>

				<RevealFx speed="fast" delay={0.4} translateY={12} marginBottom="12">
					<Text variant="heading-default-m" onBackground="neutral-medium">
						Deine Vision, Unser Code.
					</Text>
				</RevealFx>

				<RevealFx speed="fast" delay={0.6} translateY={16} marginBottom="24">
					<Text variant="body-default-m">
						Innovative Web- und Softwareentwicklung, die Ihre Ideen zum Leben erweckt.
					</Text>
				</RevealFx>

				<RevealFx speed="fast" delay={0.8} translateY={20}>
					<Flex gap="16" vertical="center">
						<Button href="#contact" size="l" variant="primary" suffixIcon="chevronRight">
							Kostenloses Gespräch
						</Button>
						<Button href="#portfolio" size="l" variant="tertiary" weight="default">
							Referenzen ansehen
						</Button>
					</Flex>
				</RevealFx>

				<RevealFx speed="fast" delay={1.0} translateY={24} marginTop="32" padding="l">
					<TechCarousel items={techStack} spacing="m" />
				</RevealFx>
			</Column>
			<TiltFx>
				<Column fillWidth maxWidth={55} aspectRatio="16 / 9">
					<RevealFx speed="fast" delay={0.8} translateY={20}>
						<OgCard
							ogData={{
								title: "LM Beauty | Wimpernstudio",
								description: "Einblick in ein aktuelles Projekt und eine maßgeschneiderte Lösung.",
								image: "/images/lmbeauty/desktop_lmbeauty.svg",
								faviconUrl: "/images/lmbeauty/favicon-32x32.png",
								url: "https://lmbeauty.de"
							}}
							direction="column-reverse"
							tabletDirection="row"
						/>
					</RevealFx>
					<RevealFx speed="fast" delay={1.2} translateY={28} center marginTop="m">
						<ScrollDown />
					</RevealFx>
				</Column>
			</TiltFx>
		</Flex>
	);
};

export { Hero };
