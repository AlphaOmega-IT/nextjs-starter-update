

"use client";

import {Background, Banner, Column, Heading, Text, ToastProvider, Flex} from "@/once-ui/components";
import {Header} from "@/app/components/header/Header";
import React from "react";
import { Footer } from "@/app/components/footer/Footer";

export default function DatenschutzPage() {
    const Datenschutz = (
        <Column padding="xl" maxWidth="xl" center fill align="center">
            <Heading as="h1" variant="display-default-l">Datenschutzerklärung</Heading>
            <Text as="p" variant="body-default-s">
                Datenschutz hat einen hohen Stellenwert für JExcellence. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).
            </Text>
            <Heading as="h2" variant="heading-strong-l" marginTop="l">1. Verantwortlicher</Heading>
            <Text as="p" variant="body-default-s">
                Verantwortlich im Sinne der DSGVO:<br />
                JExcellence - Justin Eiletz<br />
                Wechloyer Tor 5, 26219 Oldenburg, justin.eiletz@jexcellence.de
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
        <Column
            fillWidth
            style={{
                minHeight: '100vh',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Header />
            <Flex flex={1} center align="center">
                {Datenschutz}
            </Flex>
            <Footer />
        </Column>
    );
}
