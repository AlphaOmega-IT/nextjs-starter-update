"use client";

import {Background, Banner, Column, Heading, Text, ToastProvider} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import {Footer} from "@/app/components/footer/Footer";
import React from "react";

export default function ImpressumPage() {

    const Impressum = (
        <Column padding="xl" maxWidth="xl" style={{
            height: '100vh'
        }}>
            <Heading as="h1" variant="display-default-l">Impressum</Heading>
            <Text as="p" variant="body-default-s">
                Angaben gemäß § 5 TMG
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                JExcellence<br />
                Justin Eiletz<br />
                Wechloyer Tor 5<br />
                26219 Oldenburg<br />
                Deutschland
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Vertreten durch: Justin Eiletz
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Kontakt:<br />
                Telefon: +49 157 70433689<br />
                E-Mail: justin.eiletz@jexcellence.de
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Umsatzsteuer-ID: Beantragung läuft aktuell noch...
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Justin Eiletz (Anschrift wie oben)
            </Text>
        </Column>
    );

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
                    {Impressum}
                </Column>
                <Column fitHeight maxWidth={70}>
                    <Footer/>
                </Column>
            </Column>
        </ToastProvider>
    );
}