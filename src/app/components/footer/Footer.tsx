"use client";

import {
    Background,
    Button,
    Column,
    Flex,
    Icon,
    Logo,
    Row,
    ScrollToTop,
    SmartLink,
    Text,
} from "@/once-ui/components";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Column gap="l" fillWidth padding="m">
            <Flex vertical="space-between" horizontal="space-between" wrap paddingX="l">
                <Column gap="m" horizontal="start">
                    <Text variant="label-default-xl">Lösungen</Text>
                    {['Produkte', 'Anwendungsfälle', 'Integrationen'].map((text) => (
                        <SmartLink key={text} href="#">{text}</SmartLink>
                    ))}
                </Column>

                <Column gap="m" horizontal="end">
                    <Text variant="label-default-xl">Unternehmen</Text>
                    {['Über mich', 'Kunden', 'Kontakt'].map((text) => (
                        <SmartLink key={text} href="#">{text}</SmartLink>
                    ))}
                </Column>
            </Flex>

            <Flex center direction="column" align="center" paddingTop="m">
                <Row gap="s">
                    {['Impressum', 'Nutzungsbedingungen', 'Datenschutz'].map((link) => (
                        <SmartLink key={link} href={`/${link.toLowerCase()}`}>{link}</SmartLink>
                    ))}
                    <SmartLink href="https://once-ui.com" suffixIcon="sparkle">Once UI</SmartLink>
                </Row>

                <Row gap="s" align="center" paddingTop="s">
                    <Logo href="/" wordmark size="xs" />
                    <Text variant="body-default-s" onBackground="accent-weak">
                        © 2023-{currentYear} JExcellence. Alle Rechte vorbehalten.
                    </Text>
                </Row>
            </Flex>
        </Column>
    );
};

export { Footer };
