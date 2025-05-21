
"use client";

import {
    Column,
    Text,
    Heading,
    SmartLink,
    Flex, ElementType,
} from "@/once-ui/components";
import React from "react";
import {Footer} from "@/app/components/footer/Footer";
import {Header} from "@/app/components/header/Header";

export default function NotFound() {
    const NotFoundContent = (
        <Column fill gap="m" center align="center">
            <Heading variant="display-default-l">
                404
            </Heading>
            <Heading variant="display-default-l">
                Seite nicht gefunden
            </Heading>
            <Text variant="body-default-s">
                Die Seite, die Sie gerade betrachten, existiert nicht.
            </Text>
            <Text variant="body-default-s">
                Vielleicht haben Sie die URL falsch eingegeben oder die Seite wurde gelöscht.
            </Text>
            <ElementType href="/">
                Zurück
            </ElementType>
        </Column>
    );

    return (
        <Column
            fillWidth
            style={{
                minHeight: '100vh',
                height: '100vh',
            }}
        >
            <Header />
            <Flex flex={1} center align="center">
                {NotFoundContent}
            </Flex>
            <Footer />
        </Column>
    );
}
