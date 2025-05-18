"use client";

import {Column, Flex, Icon, Row, Media, Text, Button} from "@/once-ui/components";
import {FlipCard} from "@/app/components/flipcard/FlipCard";
import {useEffect, useRef, useState} from "react";
import styles from "./Profile.module.scss";
import {SocialBar} from "@/app/components/socialbar/SocialBar";

const ABT_ME_TEXT = `
Hallo, ich bin Justin Eiletz, 25 Jahre alt und ursprünglich aus Nordrhein-Westfalen – seit einiger Zeit nun in Oldenburg zu Hause. Mit fast einem Jahrzehnt Erfahrung im Softwarebereich blicke ich auf eine spannende Reise zurück, die mit Leidenschaft für Code, Innovation und Qualität gepflastert ist.

                                    Schon 2017 begann ich meine Karriere mit der Entwicklung von Minecraft-Plugins in Java – ein spielerischer Einstieg, der mir fundierte Kenntnisse in Hibernate und MySQL vermittelte. Meine Neugier trieb mich weiter: 2019 schloss ich meine staatliche Ausbildung im Bereich Systemintegration/Anwendungsentwicklung ab, gefolgt vom Fachinformatiker-Abschluss (IHK) 2022.

                                    Als Mitgründer der AlphaOmega-IT GbR realisierte ich komplexe Fullstack-Projekte mit Technologien wie React, Vue.js und Java Spring. Heute widme ich mich bei ab-data der Testautomatisierung mit Tools wie Selenium und Ranorex – immer mit dem Ziel, robuste Softwarelösungen zu gestalten. Meine jüngste ISTQB-Zertifizierung unterstreicht dabei meinen Anspruch an strukturierte Qualitätssicherung.

                                    Mein Tech-Stack? Eine Mischung aus Präzision und Kreativität:
                                    🔹 Backend: Java, Spring, Hibernate, Node.js
                                    🔹 Frontend: React, Vue.js, Angular, JavaScript
                                    🔹 Tools & Infrastruktur: Docker, Git, MySQL

                                    Obwohl Code mein Handwerk ist, liegt mir die Menschlichkeit in der Tech-Welt am Herzen. Ich glaube an Lösungen, die nicht nur funktionieren, sondern auch begeistern – und daran, dass jede Zeile Code eine Geschichte erzählen kann.

                                    Sie haben eine Vision? Lassen Sie uns darüber sprechen – ich übersetze sie gerne in eleganten Code.
                                    Ihre Idee. Unsere Expertise. Gemeinsame Innovation.

                                    Justin Eiletz
                                    Softwareentwickler & Qualitätsenthusiast
                                    `;

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
        year: "2022",
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
]

export const Profile = () => {
    const [activeView, setActiveView] = useState<"überblick" | "projekte" | "skills">("überblick");
    const [isExpanded, setIsExpanded] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const animationRef = useRef<{
        rafId: number | null;
        speed: number;
        phase: number;
    }>({
        rafId: null,
        speed: 0.5,
        phase: 0
    });

    const INTRO_TEXT = (
        <>
            Hallo, ich bin Justin Eiletz - Softwareentwickler mit einer Leidenschaft für
            qualitativ hochwertige Lösungen. Seit 2017 forme ich Ideen in eleganten Code,
            von Minecraft-Plugins bis zu Enterprise-Systemen.
        </>
    );

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const container = timelineRef.current;
        if (!container) return;

        const animate = () => {
            const maxScroll = container.scrollHeight - container.clientHeight;
            animationRef.current.phase += 0.002 * animationRef.current.speed;
            container.scrollTop = Math.abs(Math.sin(animationRef.current.phase)) * maxScroll;

            animationRef.current.rafId = requestAnimationFrame(animate);
        };

        const handleHoverStart = () => {
            animationRef.current.speed = 0.2;
        };

        const handleHoverEnd = () => {
            animationRef.current.speed = 0.5;
        };

        const stopUserScroll = (e: WheelEvent) => {
            if (container) {
                container.scrollTop += 0;
            }
        };

        container.addEventListener("mouseenter", handleHoverStart);
        container.addEventListener("mouseleave", handleHoverEnd);
        container.addEventListener("wheel", stopUserScroll, { passive: true });

        animationRef.current.rafId = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current.rafId) {
                cancelAnimationFrame(animationRef.current.rafId);
            }

            container.removeEventListener("mouseenter", handleHoverStart);
            container.removeEventListener("mouseleave", handleHoverEnd);
            container.removeEventListener("wheel", stopUserScroll);
        };
    }, []);

    return (
        <Column fill center>
            <Flex fillWidth fitHeight margin="s" padding="xs" direction="row" mobileDirection="column" center gap="m">
                <Column fillWidth flex={isMobile ? 1 : 0}>
                    <Column center>
                        {!isMobile ? (
                            <FlipCard autoFlipInterval={5}>
                                <Media
                                    width={isMobile ? 10 : 20}
                                    src="/images/avatar/avatar_1.png"
                                    radius="l-4"
                                    aspectRatio="1 / 1"
                                />
                                <Media
                                    width={isMobile ? 10 : 20}
                                    src="/images/brand/icon.svg"
                                    radius="l-4"
                                    objectFit="contain"
                                    aspectRatio="1 / 1"
                                />
                            </FlipCard>
                        ) : (
                            <Media
                                width={isMobile ? 10 : 20}
                                src="/images/avatar/avatar_1.png"
                                radius="l-4"
                                aspectRatio="1 / 1"
                            />
                        )}
                    </Column>
                    <Column style={{ marginTop: ! isMobile ? "12.5rem" : "2.5rem" }}>
                        <SocialBar />
                    </Column>
                </Column>
                <Column padding="s" margin="s" center fill>
                    <Column fill padding="xs" margin="xs">
                        <Column fitWidth margin="m" padding="xs" center>
                            <Flex direction="column" gap="s" fill>
                                <Text variant="body-default-m" className={styles.textEntrance} onBackground="neutral-medium">
                                    {INTRO_TEXT}
                                </Text>

                                {!isExpanded && (
                                    <Flex center gap="s" fill className={styles.bounceAnimation} onClick={() => setIsExpanded(true)}>
                                        <Icon name="chevronDown" size="s" />
                                        <Text variant="body-default-s">Klicken, um mehr zu erfahren</Text>
                                    </Flex>
                                )}

                                {isExpanded && (
                                    <Flex
                                        direction="column"
                                        gap="s"
                                        fill
                                    >
                                        <Column className={styles.detailedText}>
                                            <Text>Mein Weg begann in NRW, führte mich nach Oldenburg, und umfasst:</Text>
                                            <ul>
                                                <li>🎓 Zwei staatliche IT-Abschlüsse</li>
                                                <li>🚀 Gründung der AlphaOmega-IT GbR</li>
                                                <li>🔍 Spezialisierung auf Testautomatisierung</li>
                                                <li>📜 ISTQB-Zertifizierung</li>
                                            </ul>
                                            <Text>Tech-Stack: Java | React | Spring | Docker | uvm.</Text>
                                        </Column>

                                        <Flex center marginTop="s">
                                            <Icon
                                                name="chevronUp"
                                                size="xl"
                                                onClick={() => setIsExpanded(false)}
                                                className={styles.clickableIcon}
                                            />
                                        </Flex>
                                    </Flex>
                                )}
                            </Flex>
                        </Column>

                        <Column fill center>
                            <Flex
                                fillWidth
                                ref={timelineRef}
                                className={styles.timelineContainer}
                                align="left"
                                gap="m"
                                direction="column"
                                style={{ height: '35vh' }}
                            >
                                {TIMELINE_ITEMS.map((item, index) => (
                                    <Column key={index} className={styles.timelineItem}>
                                        <Flex
                                            direction="row"
                                            radius="xl"
                                            background="surface"
                                            className={styles.milestoneCard}
                                            padding="xs"
                                            vertical="center"
                                        >
                                            <Row width={5} flex={0}>
                                                <Text className={styles.milestoneYear}>{item.year}</Text>
                                            </Row>
                                            <Column align="left" fitWidth flex={1}>
                                                <Row paddingY="xs" horizontal="start" vertical="center" gap="s">
                                                    <Icon name={item.icon} size="s" />
                                                    <Text variant="body-strong-m">{item.title}</Text>
                                                </Row>
                                                <Column fitWidth>
                                                    <Text variant="body-default-m" onBackground="neutral-medium">
                                                        {item.description}
                                                    </Text>
                                                </Column>
                                            </Column>
                                        </Flex>
                                    </Column>
                                ))}
                            </Flex>
                        </Column>
                    </Column>
                </Column>
            </Flex>

            <Column center fill>
                <Flex gap="xs" className={styles.scrollHint}>
                    <Icon name="chevronDown" size="s" />
                    <Text variant="body-default-s">Scrollen, um mehr zu entdecken</Text>
                </Flex>
            </Column>
        </Column>
    );
};