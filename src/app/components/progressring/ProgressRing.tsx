"use client";

import styles from "./ProgressRing.module.scss";
import {Column, Text} from "@/once-ui/components";

interface ProgressRingProps {
    value: number;
    size?: "xs" | "s" | "m";
    tone?: "primary" | "warning" | "success";
    label?: string;
}

export const ProgressRing = ({
                                 value,
                                 size = "xs",
                                 tone = "primary",
                                 label
                             }: ProgressRingProps) => {
    const strokeWidth = 4;
    const radius = {
        xs: 30,
        s: 45,
        m: 60
    }[size];

    const normalizedRadius = radius - strokeWidth;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <Column className={styles.container}>
            <svg
                className={styles.svg}
                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            >
                <circle
                    className={styles.background}
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className={styles.progress}
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circumference} ${circumference}`}
                    style={{ strokeDashoffset }}
                />
            </svg>

            {label && (
                <Text
                    variant="body-strong-m"
                    className={styles.label}
                >
                    {label}
                </Text>
            )}
        </Column>
    );
};