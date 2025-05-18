"use client";

import {
    Background,
    Button,
    Column,
    Flex,
    Icon,
    Logo,
    Row, ScrollToTop,
    SmartLink,
    Text,
} from "@/once-ui/components";
import { useState } from "react";
import {Line} from "recharts";

export const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());

    return (
        <>
            <Column
                gap="l"
                fillWidth
                padding="m"
                marginY="xs"
            >
                <Row
                    margin="m"
                    fillWidth
                    horizontal="space-between"
                    wrap
                >
                    <Column gap="12">
                        <Text variant="label-default-m">
                            Lösungen
                        </Text>
                        <SmartLink href="#">
                            Produkte
                        </SmartLink>
                        <SmartLink href="#">
                            Anwendungsfälle
                        </SmartLink>
                        <SmartLink href="#">
                            Integrationen
                        </SmartLink>
                    </Column>

                    <Column gap="12">
                        <Text variant="label-default-m">
                            Unternehmen
                        </Text>
                        <SmartLink href="#">
                            Über mich
                        </SmartLink>
                        <SmartLink href="#">
                            Kunden
                        </SmartLink>
                        <SmartLink href="#">
                            Kontakt
                        </SmartLink>
                    </Column>

                    <Column>
                        <Text variant="label-default-m">
                            Soziales
                        </Text>
                        <Column>
                            <Button
                                href="https://github.com/AlphaOmega-IT/"
                                prefixIcon="github"
                                variant="tertiary"
                                size="s"
                                label="GitHub"
                            />
                            <Button
                                href="https://www.instagram.com/jexcellence_/"
                                prefixIcon="instagram"
                                variant="tertiary"
                                size="s"
                                label="Instagram"
                            />
                            <Button
                                href="#"
                                prefixIcon="whatsapp"
                                variant="tertiary"
                                size="s"
                                label="WhatsApp"
                            />
                        </Column>
                    </Column>
                </Row>

                <Flex
                    fillWidth
                    maxWidth="l"
                    horizontal="center"
                    vertical="end"
                    wrap
                    direction="column"
                >
                    <Row gap="s" vertical="end" paddingBottom="m">
                        <SmartLink href="/impressum">
                            Impressum
                        </SmartLink>
                        <SmartLink href="/nutzungsbedingungen">
                            Nutzungsbedingungen
                        </SmartLink>
                        <SmartLink href="/datenschutz">
                            Datenschutz
                        </SmartLink>
                        <SmartLink href="https://once-ui.com" suffixIcon="sparkle">
                            Once UI
                        </SmartLink>
                    </Row>

                    <Row gap="s" vertical="end">
                        <Logo href="/" wordmark={true} size="xs" />
                        <Text variant="body-default-s" onBackground="accent-weak">
                            © 2023-{currentYear} JExcellence. Alle Rechte vorbehalten.
                        </Text>
                    </Row>
                </Flex>
            </Column>
        </>
    );
};

export default Footer;
