import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import {Metadata, Viewport} from "next";

import { baseURL, style, meta, og, schema, social } from "./resources/once-ui.config";
import { Column, Flex, ToastProvider, ThemeProvider } from "@/once-ui/components";

import React from "react";
import {Jura, Roboto} from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import {ViewPortLock} from "@/app/components/viewportlock/ViewPortLock";

const primary = Jura({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap'
});

const secondary = Space_Grotesk({
  variable: '--font-secondary',
  subsets: ['latin'],
  display: 'swap'
});

const tertiary = Roboto({
  variable: '--font-tertiary',
  subsets: ['latin'],
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: 'auto',
  interactiveWidget: 'resizes-content',
  themeColor: '#004d00',
};

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = new URL("https://jexcellence.de")

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://" + baseURL,
      siteName: "JExcellence | Innovative Web & Softwarelösungen",
      images: [
        {
          url: og.image,
          alt: og.title,
        },
      ],
      type: og.type as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.image],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": 1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase,
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": schema.type,
  url: "https://" + baseURL,
  logo: schema.logo,
  name: schema.name,
  description: schema.description,
  email: schema.email,
  sameAs: Object.values(social).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="de"
      fillHeight
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-border={style.border}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-surface={style.surface}
      data-transition={style.transition}
      data-scaling={style.scaling}
      className={classNames(
        primary.variable,
        tertiary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
      )}
    >
      <head title="JExcellence | Innovative Web & Softwarelösungen" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <title></title>
      </head>
      <ThemeProvider>
        <ToastProvider>
          <Column as="body" fillWidth margin="0" padding="0" style={{ minHeight: "100vh"}} suppressHydrationWarning>
            <ViewPortLock>
              {children}
            </ViewPortLock>
          </Column>
        </ToastProvider>
      </ThemeProvider>
    </Flex>
  );
}
