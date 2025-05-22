"use client";

import {
    Logo,
    Row,
    UserMenu,
    Fade, IconButton, Button, useToast, NavIcon, Column, Banner,
} from "@/once-ui/components";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {MegaMenu} from "@/once-ui/modules";
import {MobileMegaMenu} from "@/app/components/mobilemenu/MobileMegaMenu";

interface HeaderProps {
    authenticated?: boolean;
    avatar?: string;
    name?: string;
    subline?: string;
}

const Header: React.FC<HeaderProps> = ({ authenticated, avatar, name, subline }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 50));

    const menuGroups = [
        {
            id: "products",
            label: "Produkte",
            suffixIcon: "chevronDown",
            sections: [
                {
                    title: "Featured",
                    links: [
                        { label: "Performance", href: "#", description: "Meine besten Produkte (in Arbeit)", icon: "chevronRight"  },
                        { label: "Sicherheit", href: "#", description: "Meine besten Produkte (in Arbeit)", icon: "chevronRight"  },
                        { label: "Effizienz", href: "#", description: "Meine besten Produkte (in Arbeit)", icon: "chevronRight"  },
                        { label: "Minecraft", href: "#", description: "Meine besten Produkte (in Arbeit)", icon: "chevronRight"  },
                    ]
                },
            ]
        },
        {
            id: "company",
            label: "Company",
            suffixIcon: "chevronDown",
            sections: [
                {
                    title: "Über JExcellence",
                    links: [
                        { label: "Meine Geschichte", href: "#about", description: "Über mich", icon: "check" },
                    ]
                }
            ]
        },
        {
            id: "legal",
            label: "Legal",
            suffixIcon: "chevronDown",
            sections: [
                {
                    title: "Legal",
                    links: [
                        { label: "Impressum", href: "/imprint", description: "Angaben gemäß § 5 TMG", icon: "chevronRight" },
                        { label: "Geschaftsbedingungen", href: "/terms", description: "Allgemeine Geschaftsbedingungen", icon: "chevronRight" },
                        { label: "Datenschutz", href: "/privacy", description: "Datenschutzerklärung", icon: "chevronRight" },
                        { label: "Cookies", href: "/cookie", description: "Cookie Policy", icon: "chevronRight"  },
                    ]
                }
            ]
        },
        {
            id: "social",
            label: "Soziales / Vernetze Dich",
            suffixIcon: "chevronDown",
            sections: [
                {
                    title: "Soziales",
                    links: [
                        { label: "Instagram", href: "https://www.instagram.com/jexcellence_/", description: "jexcellence_", icon: "instagram"},
                        { label: "GitHub", href: "https://github.com/JExcellence", description: "Übersicht meiner Projekte.", icon: "github" },
                        { label: "Linkedin", href: "https://www.linkedin.com/in/justine-eiletz/", description: "Mein LinkedIn Profil.", icon: "linkedIn" },
                    ]
                },
                {
                    title: "Vernetze Dich",
                    links: [
                        { label: "WhatsApp", href: "https://wa.me/4915770433689", description: "Kontaktiere mich doch direkt.", icon: "whatsapp" },
                        { label: "E-Mail", href: "mailto:justin.eiletz@jexcellence.de", description: "Schreibe mir doch eine E-Mail.", icon: "mail" },
                        { label: "Discord Server", href: "https://discord.gg/W5BWpf8Gz8", description: "Community Discord (im Aufbau)", icon: "discord" },
                    ]
                }
            ]
        }
    ];

    return (
        <>
            <Column zIndex={3} fillWidth position="sticky" top="0" left="0">
                <Banner zIndex={4}>
                    Die Webseite befindet sich noch im Aufbau, dies könnte noch einige Zeit in Anspruch nehmen.
                </Banner>
                <Fade fillWidth position="absolute" top="0" height={3} pattern={{ display: true, size: "1" }} />

                {/* MOBILE */}
                <Row as="header" fillWidth paddingY="xs" paddingX="m" position="relative" gap="m" vertical="center" horizontal="space-between" show="s">
                    <Logo href="/"/>
                    <NavIcon
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        isActive={isMobileMenuOpen}
                        show="s"
                    />

                    { isMobileMenuOpen && (
                        <Column fillWidth position="absolute" top="0" left="0" center>
                            <MobileMegaMenu menuGroups={menuGroups} onClose={() => setIsMobileMenuOpen(false)}/>
                        </Column>
                    )}
                </Row>

                {/* TABLET */}
                <Row as="header" fillWidth paddingY="xs" paddingX="m" position="relative" gap="m" show="m" hide="s" center>
                    <Row
                        gap="m"
                    >
                        <Logo href="/"/>
                        <MegaMenu menuGroups={menuGroups} />
                    </Row>
                </Row>

                {/* DESKTOP */}
                <Row as="header" fillWidth paddingY="xs" paddingX="m" position="relative" gap="m" vertical="space-between" horizontal="space-between" hide="m">
                    <Row
                        gap="m"
                    >
                        <Logo href="/"/>
                        <MegaMenu menuGroups={menuGroups} />
                    </Row>

                    <Row
                        gap="m"
                    >
                        <IconButton
                            icon="discord"
                            variant="tertiary"
                            href="https://discord.gg/W5BWpf8Gz8"
                        />
                        <IconButton
                            icon="github"
                            variant="tertiary"
                            href="https://www.github.com/jexcellence"
                        />
                        <IconButton
                            icon="instagram"
                            variant="tertiary"
                            href="https://www.instagram.com/jexcellence_/"
                        />
                        {! authenticated && (
                            <Button
                                size="s"
                                label="Anmelden"
                                variant="secondary"
                                disabled={true}
                                weight="default"
                            />
                        )}

                        {authenticated && (
                            <UserMenu name={name} subline={subline} avatarProps={{ empty: !avatar, src: avatar }} />
                        )}
                    </Row>
                </Row>
            </Column>
        </>
    );
};

export { Header };