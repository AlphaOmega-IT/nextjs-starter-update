import {
    Button,
    Column,
    Heading,
    Text,
    Icon,
    SmartLink,
    Fade, Badge
} from "@/once-ui/components";

import styles from "./not-found.module.scss"
import React from "react";

export default function NotFound() {
    return (
        <Column fillWidth>
            <Column gap="xl" vertical="center" horizontal="center" center fillWidth>
                <Text
                    variant="display-strong-xl"
                    align="center"
                >
                    404
                </Text>

                <Icon
                    name="sparkle"
                    size="xl"
                    className={styles.floatIcon}
                />

                <Column gap="m" horizontal={"center"} vertical={"center"}>
                    <Heading as="h1" variant="display-strong-m">
                        Hoppla! Wir haben uns verlaufen
                    </Heading>

                    <Text variant="body-default-m" color="neutral-medium">
                        Die gesuchte Seite konnte nicht gefunden werden.
                        Vielleicht hast du dich vertippt oder die Seite existiert nicht mehr.
                    </Text>
                </Column>

                <Column gap="s" horizontal="center">
                    <Badge
                        background="neutral-weak"
                        border="surface"
                        href="/"
                        textVariant="label-default-l"
                    >
                        Startseite
                    </Badge>
                    <SmartLink
                        href="/#contact"
                        color="neutral-medium"
                    >
                        Oder kontaktieren Sie uns
                    </SmartLink>
                </Column>

                <Fade
                    pattern={{ size: "1", display: true }}
                    horizontal="end"
                    height={120}
                    opacity={40}
                />
            </Column>
        </Column>
    );
}