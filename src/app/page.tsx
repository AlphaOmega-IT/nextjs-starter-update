"use client";

import {Header} from "@/app/components/header/Header";
import {Hero} from "@/app/components/hero/Hero";
import {Background, Banner, Column, ToastProvider} from "@/once-ui/components";
import React from "react";
import {Profile} from "@/app/components/profile/Profile";
import {Footer} from "@/app/components/footer/Footer";
import {TechStack} from "@/app/components/techstack/TechStack";
import {PricingSection} from "@/app/components/pricingsection/PricingSection";

export default function Home() {
    return (
        <ToastProvider>
            <Column fillWidth center gap="xl">
              <Background
                position="absolute"
                mask={{
                  x: 150,
                  y: 50,
                  radius: 200,
                }}
                gradient={{
                  display: true,
                  x: 100,
                  y: 0,
                  width: 0,
                  height: 0,
                  tilt: 0,
                  opacity: 100,
                  colorStart: "page-background",
                  colorEnd: "accent-background-strong",
                }}
                particle={{
                  display: false,
                  density: 350,
                  interactive: true,
                  interactionRadius: 12,
                  speed: 2,
                  opacity: 100,
                  color: "surface-background",
                }}
              />
                <Header/>
                <Column fill maxWidth={100} wrap>
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
