
"use client";

import Link from "next/link";
import React, { ReactNode, forwardRef } from "react";
import { Flex } from "./Flex";
import { Icon } from "@/once-ui/components/Icon";

interface ElementTypeProps {
    href?: string;
    onClick?: () => void;
    onLinkClick?: () => void;
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    suffixIcon?: string;
    [key: string]: any;
}

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

const ElementType = forwardRef<HTMLElement, ElementTypeProps>(
    (
        {
            href,
            type,
            onClick,
            onLinkClick,
            children,
            className,
            style,
            suffixIcon,
            ...props
        },
        ref
    ) => {
        const { suffixIcon: _, ...cleanProps } = props;

        if (href) {
            const isExternal = isExternalLink(href);
            if (isExternal) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        ref={ref as React.Ref<HTMLAnchorElement>}
                        className={className}
                        style={style}
                        onClick={() => onLinkClick?.()}
                        {...(cleanProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    >
                        {children}
                        {suffixIcon && <Icon name={suffixIcon} />}
                    </a>
                );
            }
            return (
                <Link
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={className}
                    style={style}
                    onClick={() => onLinkClick?.()}
                    {...(cleanProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                    {suffixIcon && <Icon name={suffixIcon} />}
                </Link>
            );
        }

        if (onClick || type === "submit" || type === "button") {
            return (
                <button
                    ref={ref as React.Ref<HTMLButtonElement>}
                    className={className}
                    onClick={onClick}
                    style={style}
                    {...(cleanProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
                >
                    {children}
                    {suffixIcon && <Icon name={suffixIcon} />}
                </button>
            );
        }

        return (
            <Flex
                ref={ref as React.Ref<HTMLDivElement>}
                className={className}
                style={style}
                {...(cleanProps as React.HTMLAttributes<HTMLDivElement>)}
            >
                {children}
                {suffixIcon && <Icon name={suffixIcon} />}
            </Flex>
        );
    }
);

ElementType.displayName = "ElementType";
export { ElementType };
