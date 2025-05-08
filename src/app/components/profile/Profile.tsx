"use client";

import {
	Badge, Button, Column, Flex, Grid, Heading, HoloFx, Icon,
	RevealFx, SegmentedControl, SmartImage, Text, TiltFx
} from "@/once-ui/components";
import { useState } from "react";
import {CodeBlock} from "@/once-ui/modules";
import {FlipCard} from "@/app/components/flipcard/FlipCard";
import styles from "./Profile.module.scss"
import {IconName} from "@/once-ui/icons";

const TIMELINE_ITEMS = [
	{
		year: "2017",
		icon: "codeBracket" as const,
		title: "Einstieg in die Softwareentwicklung",
		description: "Erste professionelle Erfahrungen mit Java durch Minecraft-Plugin-Entwicklung (Hibernate, MySQL)"
	},
	{
		year: "2019",
		icon: "academicCap" as const,
		title: "Qualifikation",
		description: "Staatlich geprüfter Abschluss mit Fokus auf Systemintegration/Anwendungsentwicklung"
	},
	{
		year: "2022",
		icon: "briefcase" as const,
		title: "Qualifikation",
		description: "Abschluss als Fachinformatiker für Anwendungsentwicklung (IHK)"
	},
	{
		year: "2022 - 2023",
		icon: "rocketLaunch" as const,
		title: "Imhaber - AlphaOmega-IT GbR",
		description: "Fullstack-Entwicklung komplexer Webanwendungen (React, Vue.js, Node.js, Java, Java Spring, Hibernate)"
	},
	{
		year: "2023",
		icon: "shieldCheck" as const,
		title: "Quality Engineering @ ab-data",
		description: "Entwicklung von Testautomatisierungslösungen (Selenium, Ranorex, aqua cloud)"
	},
	{
		year: "2024",
		icon: "star" as const,
		title: "ISTQB Certified Tester",
		description: "Foundation Level-Zertifizierung für systematische Softwaretests"
	}
];

const PROFILE_CONTENT = {
	de: {
		bio: `Hallo! Ich bin Justin – ein leidenschaftlicher Code-Architekt mit einem Auge für elegante Lösungen.
    Seit meiner ersten Zeile Java-Code für Minecraft-Plugins 2017 hat mich die Softwarekunst nicht mehr losgelassen. 
    
    🚀 Meine Reise:
    • 2022: Doppelabschluss als Fachinformatiker & Informationstechnischer Assistent
    • 2022-2023: Selbstständige Fullstack-Projekte mit modernsten Tech-Stacks
    • Seit 2023: Qualitätssicherungsexperte @ ab-data (ISTQB-zertifiziert)
    
    Ich verbinde technische Präzision mit nutzerzentriertem Design und entwickle skalierbare Lösungen, die nicht nur funktionieren, sondern begeistern. Meine Expertise reicht von React-Ökosystemen bis zu Cloud-Architekturen, immer mit Fokus auf cleanem Code und robusten Teststrategien.`,

		stats: [
			{ value: "5+", label: "Jahre praktische Erfahrung", icon: "HiSparkles" },
			{ value: "98%", label: "Kundenzufriedenheit", icon: "HiHeart" },
			{ value: "1k+", label: "Code-Commits 2024", icon: "HiCommandLine" },
			{ value: "100%", label: "Testabdeckung", icon: "HiShieldCheck" }
		],

		skills: [
			{
				icon: "HiSparkles",
				label: "Fullstack Development",
				level: "Experte",
				tech: "React/Next.js, Node.js, PostgreSQL",
				projects: "E-Commerce Systeme, KI-Chats"
			},
			{
				icon: "HiSparkles",
				label: "Cloud Architektur",
				level: "Advanced",
				tech: "AWS, Docker, Terraform",
				projects: "Serverless APIs, CI/CD Pipelines"
			},
			{
				icon: "HiSparkles",
				label: "Qualitätssicherung",
				level: "Experte",
				tech: "Jest, Cypress, Selenium",
				projects: "Testautomatisierungssysteme"
			},
			{
				icon: "HiSparkles",
				label: "DevOps Praxis",
				level: "Advanced",
				tech: "GitHub Actions, Jenkins, Prometheus",
				projects: "Monitoring-Lösungen"
			}
		]
	}
};


export const Profile = () => {
	const [activeView, setActiveView] = useState<"überblick" | "projekte" | "skills">("überblick");

	return (
		<Flex fill padding="m" gap="m" direction="row" mobileDirection="column">
			<Flex fill gap="s" direction="column">
				<RevealFx
					delay={0.2}
					maxHeight={25}
				>
					<FlipCard
						autoFlipInterval={5}
					>
						<SmartImage
							radius="l-4"
							width={20}
							aspectRatio="1/1"
							src="/images/avatar/avatar_1.jpg"
						/>
						<SmartImage
							radius="l-4"
							width={20}
							aspectRatio="1/1"
							objectFit="contain"
							src="/images/brand/icon.svg"
						/>
					</FlipCard>
				</RevealFx>

				<RevealFx delay={0.3} direction="column">
					<Heading variant="display-strong-m" align="center">
						Justin Eiletz
					</Heading>
					<Text variant="label-strong-m" onBackground="neutral-medium" align="center">
						Fachinformatiker Anwendungsentwicklung
					</Text>
				</RevealFx>
			</Flex>
			<TiltFx fill padding="m">
				<Flex fill gap="l" direction="column" center>
					<SegmentedControl
						buttons={[
							{
								value: "überblick",
								label: "Profildetails",
								variant: "outline",
								prefixIcon: "HiUser"
							},
							{
								value: "projekte",
								label: "Leuchtturmprojekte",
								variant: "outline",
								prefixIcon: "HiBriefcase"
							},
							{
								value: "skills",
								label: "Tech-Stack",
								variant: "outline",
								prefixIcon: "HiChip"
							}
						]}
						onToggle={(value) => setActiveView(value as typeof activeView)}
					/>

					{activeView === "überblick" && (
						<RevealFx delay={0.2}>
							<Flex direction="column" gap="l" className={styles.bioContainer}>
								<Column className={styles.textGroup}>
									<Text variant="body-default-m">
										Hallo! Ich bin Justin –
										Code-Architekt mit Passion für digitale Eleganz.
									</Text>
									<Text variant="body-default-m">
										Seit meinem ersten Java-Code für Minecraft-Plugins 2017 formt Software
										meine kreative DNA.
									</Text>
								</Column>

								<Flex center align="left" fill>
									<Flex direction="column" gap="xl" fill>
										{TIMELINE_ITEMS.map((item, index) => (
											<RevealFx key={item.year} delay={0.1 * index} fill>
												<Flex
													direction="row"
													gap="xl"
													padding="xl"
													radius="xl"
													center
													background="surface"
												>
													<Flex center>
														<Text variant="display-default-xs">
															{item.year}
														</Text>
													</Flex>

													<Flex direction="column" gap="xs">
														<Flex gap="s" align="left" vertical="center">
															<Icon
																name={item.icon}
																size="m"
															/>
															<Text variant="label-strong-l">{item.title}</Text>
														</Flex>
														<Text variant="body-default-m" onBackground="neutral-medium">
															{item.description}
														</Text>
													</Flex>
												</Flex>
											</RevealFx>
										))}
									</Flex>
								</Flex>

								{/* Closing Statement */}
								<Text
									variant="body-default-l"
									className={styles.closingStatement}
									align="center"
								>
									Ich verbinde <span className={styles.highlight}>technische Präzision</span>
									mit <span className={styles.highlight}>nutzerzentriertem Design</span> – für
									Lösungen, die nicht nur funktionieren, sondern <span className={styles.highlight}>begeistern</span>.
								</Text>
							</Flex>
						</RevealFx>
					)}

					{activeView === "skills" && (
						<Grid columns="2" gap="s">
							{PROFILE_CONTENT.de.skills.map((skill) => (
								<HoloFx key={skill.label}>
									<Flex direction="column" gap="m" padding="l" radius="xl" background="surface">
										<Flex gap="l" align="center">
											<Icon name={skill.icon} size="xl"/>
											<Column gap="xs">
												<Text variant="label-strong-l">{skill.label}</Text>
												<Flex gap="s" wrap>
													<Badge textVariant="body-strong-m" color="brand">
														{skill.level}
													</Badge>
													<Badge textVariant="body-strong-m" color="neutral">
														{skill.tech}
													</Badge>
												</Flex>
											</Column>
										</Flex>

										<Flex direction="column" gap="s">
											<Text variant="label-default-s" onBackground="neutral-medium">
												Anwendungsgebiete:
											</Text>
											<Text variant="body-default-s">
												{skill.projects}
											</Text>
										</Flex>
									</Flex>
								</HoloFx>
							))}
						</Grid>
					)}

					{activeView === "projekte" && (
						<Column gap="xl">
							<RevealFx delay={0.2}>
								<CodeBlock
									codeInstances={[{
										code: AI_CHAT_EXAMPLE,
										language: "typescript",
										label: "KI-Chat-Integration"
									}]}
									codePreview={
										<Flex vertical="space-between" padding="l">
											<Text variant="label-strong-m">Enterprise Chat Implementation</Text>
											<Badge color="green">Live-Produktion</Badge>
										</Flex>
									}
									previewPadding="0"
									copyButton={true}
									fullscreenButton={true}
								/>
							</RevealFx>

							<RevealFx delay={0.3}>
								<Flex gap="l" wrap>
									<Button variant="primary" suffixIcon="HiArrowTopRight">
										GitHub-Profile
									</Button>
									<Button variant="secondary" prefixIcon="HiDocument">
										Lebenslauf (PDF)
									</Button>
								</Flex>
							</RevealFx>
						</Column>
					)}
				</Flex>
		</TiltFx>
</Flex>
);
};

const AI_CHAT_EXAMPLE = `// Next-gen LLM Integration
export const createEnterpriseChatStream = async (prompt: string) => {
  const analytics = await initializeAnalytics();
  
  const response = await fetch('/api/ai/enterprise-chat', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'X-Security-Token': process.env.NEXT_PUBLIC_AI_GUARD
    },
    body: JSON.stringify({
      prompt,
      model: 'gpt-4-turbo',
      safetyFilters: SAFETY_FILTERS.ENTERPRISE
    })
  });

  const reader = response.body?.getReader();
  const decoder = new TextDecoder();
  
  try {
    while(true) {
      const { done, value } = await reader.read();
      if(done) break;
      const decoded = decoder.decode(value);
      analytics.trackChunk(decoded);
      yield decoded;
    }
  } finally {
    await analytics.flush();
    reader.releaseLock();
  }
};`;
