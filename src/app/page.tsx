"use client";

import {Header} from "@/app/components/header/Header";
import {Hero} from "@/app/components/hero/Hero";
import {Background, Banner, Column, ToastProvider} from "@/once-ui/components";
import React from "react";
import {Profile} from "@/app/components/profile/Profile";
import PricingSection from "@/app/components/projectsimulator/ProjectSimulator";
import {Footer} from "@/app/components/footer/Footer";
import {TechStack} from "@/app/components/techstack/TechStack";

export default function Home() {
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
                <Column fill maxWidth={100}>
                    <Hero/>
                </Column>
                <Column fitHeight maxWidth={80} id="contact">
                    <Profile/>
                </Column>
                <Column fitHeight maxWidth={80}>
                    <TechStack />
                </Column>
                <Column fitHeight maxWidth={70} id="services">
                    <PricingSection/>
                </Column>
                <Column fitHeight maxWidth={70}>
                    <Footer/>
                </Column>
            </Column>
        </ToastProvider>
    )
}
