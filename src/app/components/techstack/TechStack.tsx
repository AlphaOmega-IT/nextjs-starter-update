"use client";

import {
    Card,
    Grid,
    Icon,
    Tag,
    RevealFx, Heading, Text, Column, Row
} from "@/once-ui/components";
import { useState } from "react";
import styles from "./TechStack.module.scss";
import {ProgressRing} from "@/app/components/progressring/ProgressRing";

const TECH_STACK = [
    {
        name: "Java Ecosystem",
        expertise: 95,
        years: 10,
        certs: ["OCP", "Spring Professional"]
    },
    {
        name: "Frontend Engineering",
        expertise: 92,
        years: 8,
        certs: ["React Expert", "Vue Master"]
    },
    {
        name: "DevOps Mastery",
        expertise: 88,
        years: 6,
        certs: ["Docker Captain", "K8s Administrator"]
    }
];

export const TechStack = () => {
    const [selectedTech, setSelectedTech] = useState("");

    return (
        <Column fill>
            <Grid columns={2} mobileColumns={1} gap="m" className={styles.grid}>
                {TECH_STACK.map((tech, index) => (
                    <RevealFx key={tech.name} delay={index * 0.15}>
                        <Card
                            onMouseEnter={() => setSelectedTech(tech.name)}
                            onMouseLeave={() => setSelectedTech("")}
                        >
                            <Column padding="m" horizontal="center">
                                <Heading as="h3" className={styles.title}>
                                    {tech.name}
                                </Heading>

                                <Column className={styles.stats}>
                                    <ProgressRing
                                        value={tech.expertise}
                                        label={`${tech.expertise}%`}
                                        size="m"
                                    />

                                    <Column className={styles.meta}>
                                        <Row className={styles.years} center>
                                            <Icon name="calendar" size="m" />
                                            {tech.years}+ Jahre
                                        </Row>
                                        <Column className={styles.certs}>
                                            {tech.certs.map(cert => (
                                                <Tag key={cert} variant="info">{cert}</Tag>
                                            ))}
                                        </Column>
                                    </Column>
                                </Column>

                                {selectedTech === tech.name && (
                                    <Column className={styles.expertise}>
                                        <Text>
                                            Kernkompetenzen: Enterprise Architekturen,
                                            Performance-Optimierung, Schulungen
                                        </Text>
                                    </Column>
                                )}
                            </Column>
                        </Card>
                    </RevealFx>
                ))}
            </Grid>
        </Column>
    );
};