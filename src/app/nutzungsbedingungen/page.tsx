"use client";

import {Background, Banner, Column, Heading, Text, ToastProvider} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";
import React from "react";

export default function NutzungsbedingungenPage() {

    const Nutzungsbedingungen = (
        <Column padding="xl" maxWidth="xl" style={{ height: '100vh'}}>
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
    )

    return (
        <ToastProvider>
            <Column fillWidth center gap="xl">
                <Background
                    position="absolute"
                    mask={{
                        x: 0,
                        y: 50,
                        radius: 200,
                    }}
                    gradient={{
                        display: true,
                        x: 150,
                        y: 0,
                        width: 350,
                        height: 300,
                        tilt: -90,
                        opacity: 100,
                        colorStart: "accent-background-strong",
                        colorEnd: "page-background",
                    }}
                    particle={{
                        display: true,
                        density: 750,
                        interactive: true,
                        interactionRadius: 12,
                        speed: 2,
                        opacity: 100,
                    }}
                />

                <Banner position="fixed" top="56" left="0" zIndex={3}>
                    Die Webseite befindet sich noch im Aufbau, dies könnte noch einige Zeit in Anspruch nehmen.
                </Banner>
                <Header/>
                <Column>
                    {Nutzungsbedingungen}
                </Column>
                <Column fitHeight maxWidth={70}>
                    <Footer/>
                </Column>
            </Column>
        </ToastProvider>
    );
}
