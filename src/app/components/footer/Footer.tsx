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

export const Footer = () => {
    const [currentYear] = useState(new Date().getFullYear());

    return (
        <>
            <Background
                position="absolute"
                radius="xl"
                mask={{
                    x: 50,
                    y: 150,
                    radius: 50,
                }}
                gradient={{
                    display: true,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    tilt: 0,
                    opacity: 80,
                    colorStart: "page-background",
                    colorEnd: "accent-alpha-strong"
                }}
            />
            <Column
                gap="l"
                fillWidth
                padding="xl"
                margin="xl"
            >
                <Row
                    fillWidth
                    maxWidth="xl"
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
                    horizontal="space-between"
                    vertical="end"
                    wrap
                >
                    <Row gap="s" vertical="end">
                        <Logo href="/" wordmark={true} size="xl" />
                        <Text variant="body-default-s" onBackground="accent-weak">
                            © 2023-{currentYear} JExcellence. Alle Rechte vorbehalten.
                        </Text>
                    </Row>

                    <Row gap="s" vertical="end">
                        <SmartLink href="#">
                            Impressum
                        </SmartLink>
                        <SmartLink href="#">
                            Nutzungsbedingungen
                        </SmartLink>
                        <SmartLink href="#">
                            Datenschutz
                        </SmartLink>
                    </Row>
                </Flex>
            </Column>
        </>
    );
};

export default Footer;
