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
        <Column fillWidth center gap="xl" style={{maxHeight: '100vh', height: '100vh'}}>
            <Header/>
            <Column>
                {Impressum}
            </Column>
            <Column fitHeight maxWidth={70}>
                <Footer/>
            </Column>
        </Column>
    );
}