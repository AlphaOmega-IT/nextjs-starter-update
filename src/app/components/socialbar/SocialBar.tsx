
"use client";

import { Button, Row, useToast } from "@/once-ui/components";
import React from "react";

const socials = [
    {
        key: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/jexcellence_/",
        icon: "instagram",
        target: "_blank",
    },
    {
        key: "email",
        label: "E-Mail",
        href: "mailto:justin.eiletz@jexcellence.de",
        icon: "mail",
        target: "_blank",
    },
    {
        key: "whatsapp",
        label: "WhatsApp",
        href: "https://wa.me/4915770433689",
        icon: "whatsapp",
        target: "_blank",
    },
    {
        key: "github",
        label: "GitHub",
        href: "https://github.com/JExcellence",
        icon: "github",
        target: "_blank",
    },
    {
        key: "discord",
        label: "Discord: jexcellence",
        href: "#",
        icon: "discord",
    },
];

const SocialBar: React.FC = () => {
    const { addToast } = useToast();

    return (
        <Row gap="s" center fill>
            {socials.map(({ key, label, href, icon, target }) =>
                key === "discord" ? (
                    <Button
                        key={key}
                        prefixIcon={icon}
                        size="m"
                        variant="primary"
                        aria-label={label}
                        onClick={() => {
                            navigator.clipboard.writeText("jexcellence").then(() =>
                                addToast({
                                    variant: "success",
                                    message: "Du hast den Discord Namen 'jexcellence' kopiert!"
                                })
                            );
                        }}
                    />
                ) : (
                    <Button
                        key={key}
                        prefixIcon={icon}
                        size="m"
                        variant="primary"
                        aria-label={label}
                        href={href}
                        target={target}
                        rel="noopener noreferrer"
                    />
                )
            )}
        </Row>
    );
};

SocialBar.displayName = "SocialBar";

export { SocialBar };
