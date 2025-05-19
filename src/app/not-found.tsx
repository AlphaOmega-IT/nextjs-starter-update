"use client";

import {
    Column,
    Text,
    Heading,
    SmartLink,
    Banner,
} from "@/once-ui/components";
import React from "react";
import {Footer} from "@/app/components/footer/Footer";
import {Header} from "@/app/components/header/Header";

export default function NotFound() {
    return (
        <Column>
            <Banner position="fixed" top="56" left="0" zIndex={3}>
                Die Webseite befindet sich noch im Aufbau, dies könnte noch einige Zeit in Anspruch nehmen.
            </Banner>
            <Header/>
            <Column fill gap="m" center minHeight={30} marginTop="xl">
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
                <SmartLink href="/">
                    Zurück
                </SmartLink>
            </Column>
            <Column>
                <Footer/>
            </Column>
        </Column>
    );
}