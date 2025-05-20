
import React, { useState } from "react";
import {Icon, Column, Button, Flex, Row, Text, ElementType, ToggleButton} from "@/once-ui/components";
import styles from "./MobileColumnMenu.module.scss";
import {index} from "d3-array";

interface MenuLink {
    label: React.ReactNode;
    href: string;
    icon?: string;
    description?: React.ReactNode;
    selected?: boolean;
}
interface MenuSection {
    title?: React.ReactNode;
    links: MenuLink[];
}
interface MenuGroup {
    id: string;
    label: React.ReactNode;
    suffixIcon?: string;
    href?: string;
    selected?: boolean;
    sections?: MenuSection[];
}

interface MobileColumnMenuProps {
    menuGroups: MenuGroup[];
    onClose?: () => void;
}

/**
 * Custom mobile/tablet nav: Expanding columnar sections, animated, icon-rich, easy tap/collapse.
 * - Layout is vertical ("columns" as stacked sections)
 * - All navigation grouped by group/section.
 * - Each section expandable, only one open at a time.
 */
export const MobileColumnMenu: React.FC<MobileColumnMenuProps> = ({ menuGroups, onClose }) => {
    const [openGroup, setOpenGroup] = useState<string | null>(null);
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Tap a group: expand/collapse its sections
    const handleGroupClick = (groupId: string) => {
        setOpenSection(null);
        setOpenGroup(prev => prev === groupId ? null : groupId);
    };

    // Tap a section (multiple sections per group possible)
    const handleSectionClick = (sectionTitle: string) => {
        setOpenSection(prev => prev === sectionTitle ? null : sectionTitle);
    };

    // Tap a link: close the menu and navigate
    const handleLinkClick = (href: string) => {
        if (onClose) onClose();
        // Navigation handled by link's href (Next.js handles <a>)
    };

    return (
        <Flex
            fill
            background="surface"
            overflowY="auto"
        >
            <Column
                gap="m"
                fill
                padding="8"
            >
                {menuGroups.map((group, index) => (
                    <Column
                        fill
                        key={`menu-group-${index}`}
                        border="neutral-alpha-strong"
                        radius="l"
                        padding="m"
                    >
                        {/* Group Header */}
                        <ToggleButton
                            fillWidth
                            aria-expanded={openGroup === group.id}
                            onClick={() => handleGroupClick(group.id)}
                            suffixIcon={openGroup === group.id ? "chevronUp" : "chevronDown"}
                            label={group.label}
                            variant="ghost"
                        />

                        {/* Group Body: Sections (if any) */}
                        {openGroup === group.id && group.sections && (
                            <Column
                                gap="m"
                                fill
                                padding="m"
                            >
                                {group.sections.map((section, secIdx) => (
                                    <Column
                                        key={section.title ? `${group.id}-${section.title}` : `sec-${secIdx}`}
                                        fill
                                        border="neutral-alpha-weak"
                                        radius="l"
                                    >
                                        {section.title && (
                                            <ToggleButton
                                                fillWidth
                                                aria-expanded={openSection === section.title}
                                                onClick={() => handleSectionClick(String(section.title))}
                                                suffixIcon={openSection === section.title ? "chevronUp" : "chevronDown"}
                                                label={section.title}
                                                variant="outline"
                                            />
                                        )}
                                        {/* Show links if this is the open section, or always show if single section */}
                                        {(section.title ? openSection === String(section.title) : true) && (
                                            <Column
                                                fitHeight
                                                padding="m"
                                            >
                                                {section.links.map((link, linkIdx) => (
                                                    <ElementType
                                                        href={link.href}
                                                        className={styles.menuLink}
                                                        key={linkIdx}
                                                        tabIndex={0}
                                                        onClick={() => handleLinkClick(link.href)}
                                                        aria-label={typeof link.label === "string" ? link.label : undefined}
                                                        target={link.href?.startsWith("http") ? "_blank" : undefined}
                                                        rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                                    >
                                                        {link.icon &&
                                                            <Icon
                                                                name={link.icon}
                                                                size="m"
                                                                marginRight="16"
                                                                onBackground="neutral-medium"
                                                            />
                                                        }
                                                        <Column fill
                                                                vertical="center"
                                                                horizontal="start"
                                                                gap="2"
                                                        >
                                                                <Text
                                                                    variant="body-default-m" onBackground="brand-medium"
                                                                >
                                                                    {link.label}
                                                                </Text>
                                                                {link.description &&
                                                                    <Text variant="body-default-s" onBackground="neutral-medium">
                                                                        {link.description}
                                                                    </Text>
                                                                }
                                                        </Column>
                                                    </ElementType>
                                                ))}
                                            </Column>
                                        )}
                                    </Column>
                                ))}
                            </Column>
                        )}
                    </Column>
                ))}
            </Column>

            {onClose && (
                <Column
                    position="absolute"
                    top="16"
                    left="16"
                    border="neutral-alpha-strong"
                    radius="m"
                >
                    <ToggleButton
                        suffixIcon="close"
                        onClick={onClose}
                        size="l"
                    />
                </Column>
            )}
        </Flex>
    );
};

export default MobileColumnMenu;
