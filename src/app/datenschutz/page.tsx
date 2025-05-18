"use client";

import {Background, Banner, Column, Heading, Text, ToastProvider} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import React from "react";
import Footer from "@/app/components/footer/Footer";

export default function DatenschutzPage() {

    const Datenschutz = (
        <Column padding="xl" maxWidth="xl" style={{
            height: '100vh'
        }}>
            <Heading as="h1" variant="display-default-l">Datenschutzerklärung</Heading>
            <Text as="p" variant="body-default-s">
                Datenschutz hat einen hohen Stellenwert für JExcellence. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">1. Verantwortlicher</Heading>
            <Text as="p" variant="body-default-s">
                Verantwortlich im Sinne der DSGVO:<br />
                JExcellence - Justin Eiletz<br />
                Wechloyer Tor 5, 26219 Oldenburg, info@jexcellence.de
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">2. Datenverarbeitung auf der Website</Heading>
            <Text as="p" variant="body-default-s">
                Beim Aufruf unserer Website werden automatisch Informationen allgemeiner Natur (z.B. IP-Adresse, Zeitpunkt, aufgerufene Seite) erfasst. Diese Daten dienen nur der Gewährleistung eines störungsfreien Betriebs und der Verbesserung unseres Angebots – eine Zuordnung zu bestimmten Personen erfolgt nicht.
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">3. Ihre Rechte</Heading>
            <Text as="p" variant="body-default-s">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
            </Text>
            <Text as="p" variant="body-default-s" marginTop="s">
                Weitere Details entnehmen Sie der vollständigen <b>offiziellen Datenschutzerklärung</b> oder kontaktieren Sie uns direkt.
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
                    {Datenschutz}
                </Column>
                <Column fitHeight maxWidth={70}>
                    <Footer/>
                </Column>
            </Column>
        </ToastProvider>
    );
}