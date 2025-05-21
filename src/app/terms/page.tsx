
"use client";

import {Background, Banner, Column, Heading, Text, ToastProvider, Flex} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import { Footer } from "@/app/components/footer/Footer";
import React from "react";

export default function NutzungsbedingungenPage() {
    const Nutzungsbedingungen = (
        <Column padding="xl" maxWidth="xl" center fill align="center">
            <Heading as="h1" variant="display-default-l">Nutzungsbedingungen</Heading>
            <Text as="p" variant="body-default-s">
                Mit der Nutzung dieser Website erkennen Sie die folgenden Nutzungsbedingungen an:
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">1. Inhalte</Heading>
            <Text as="p" variant="body-default-s">
                Die bereitgestellten Inhalte dienen ausschließlich der Information. Für Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird keine Gewähr übernommen.
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">2. Urheberrecht</Heading>
            <Text as="p" variant="body-default-s">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">3. Haftung</Heading>
            <Text as="p" variant="body-default-s">
                Die Nutzung der Website erfolgt auf eigene Gefahr. Für Schäden materieller oder ideeller Art, die durch die Nutzung der Website verursacht wurden, wird keine Haftung übernommen.
            </Text>
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
                {Nutzungsbedingungen}
            </Flex>
            <Footer />
        </Column>
    );
}
