
"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";
import {
    Background,
    Badge,
    Button,
    Card,
    Column,
    Dialog,
    Flex,
    Heading,
    Icon,
    Input,
    Line,
    Row,
    Scroller,
    SegmentedControl,
    Table,
    Text,
    Textarea,
    useToast,
} from "@/once-ui/components";
import styles from "./PricingSection.module.scss";

const filters = [
    { id: "all", label: "Alle Pakete" },
    { id: "webdesign", label: "Webdesign" },
    { id: "wartung", label: "Wartung" },
    { id: "extras", label: "Extras" },
    { id: "minecraft", label: "Minecraft" },
];

const PricingSection = () => {
    const [filter, setFilter] = useState("webdesign");
    const [selected, setSelected] = useState<number[]>([]);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [formErrors, setFormErrors] = useState<{ [K in keyof typeof form]?: string }>({});
    const [mobile, setMobile] = useState(false);
    const { addToast } = useToast();

    useEffect(() => {
        const onResize = () => setMobile(window.innerWidth < 1000);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const filters = [
        { id: "all", label: "Alle Pakete" },
        { id: "webdesign", label: "Webdesign" },
        { id: "wartung", label: "Wartung" },
        { id: "extras", label: "Extras" },
        { id: "minecraft", label: "Minecraft" },
    ];

    const products = [
        // Free consultation (first, always free)
        {
            id: 101,
            category: "webdesign",
            title: "Erstgespräch (Webdesign)",
            price: "Kostenlos",
            description: "Kostenloses 30-Minuten Erstgespräch für dein Webdesign-Projekt.",
            features: [
                { title: "Kein Risiko", desc: "Unverbindlich & kostenlos" },
                { title: "Individuelle Planung", desc: "Für dein Projekt" },
                { title: "Beratung durch Fullstack-Entwickler", desc: "Technische und gestalterische Kompetenz" }
            ],
            popular: true,
            note: "Ist in jedem Paket enthalten"
        },
        // Monthly has its own "tier", doesn't need sorting, but keeps place just after free
        {
            id: 108,
            category: "webdesign",
            title: "Domain & Hosting Paket",
            price: "16,99 € / Monat", // Raised monthly price a bit
            description: "Sicheres Webhosting inkl. .de-Domain, E-Mail-Adresse & SSL-Zertifikat, DSGVO-konform gehostet in Deutschland.",
            features: [
                { title: "Dauerhaft schnell", desc: "SSD-Speicher, regelmäßige Backups" },
                { title: "1 .de-Domain", desc: "inkl. Domainverwaltung" },
                { title: "E-Mail Adresse inklusive", desc: "1x Adresse mit Weiterleitung" },
                { title: "SSL inklusive", desc: "Sichere Verbindung (HTTPS)" }
            ],
            note: "Pauschalpreis – monatlich kündbar"
        },
        // Text/Bild update: stays as one of the cheapest single services
        {
            id: 107,
            category: "webdesign",
            title: "Text/Bild-Update auf Webseite",
            price: "ab 29,00 €*", // small price raise
            description: "Schnelle Aktualisierung von Texten oder Bildern auf deiner Website – ideal für News, Aktionen, kleine Änderungen.",
            features: [
                { title: "Kurze Bearbeitung", desc: "Updates meist innerhalb von 24-48h" },
                { title: "Bis zu 2 Textabschnitte ODER 5 Bilder", desc: "pro Auftrag – fair & kalkulierbar" },
                { title: "Beratung inklusive", desc: "Was ist rechtlich/technisch sinnvoll?" }
            ],
            note: "Für größere/r Komplexere Anpassungen individuelles Angebot"
        },
        // Sorted ascending by new price, incremented a bit for each next tier
        {
            id: 103,
            category: "webdesign",
            title: "Starter-Website",
            price: "ab 299,00 €*", // raised from 249
            description: "Der günstige Einstieg – ideal für Einzelunternehmer und Vereine.",
            features: [
                { title: "OnePage-Design", desc: "Moderne, scrolldynamische Startseite" },
                { title: "Mobile-optimiert", desc: "Optimale Darstellung auf jedem Gerät" },
                { title: "Domain & E-Mail", desc: "1 Jahr inkl. .de-Domain & E-Mail" }
            ],
            note: ""
        },
        {
            id: 102,
            category: "webdesign",
            title: "Landingpage Express",
            price: "ab 579,00 €*", // raised from 529
            description: "Deine neue Landingpage in 48h zum Festpreis.",
            features: [
                { title: "Schnelle Umsetzung", desc: "Fertig in 48-72 Stunden (nach Briefing)" },
                { title: "Responsive", desc: "Für alle Geräte optimiert" },
                { title: "3 Revisionen inklusive", desc: "Korrekturschleife kostenlos" },
                { title: "DSGVO-Check", desc: "Rechtliche Pflichtangaben enthalten" },
                { title: "3 Monate Support", desc: "Es werden 3 Monate Updates geliefert auf" }
            ]
        },
        {
            id: 105,
            category: "webdesign",
            title: "Webshop Mini",
            price: "ab 419,00 €*", // raised from 379
            description: "Einfacher Start in den Onlinehandel.",
            features: [
                { title: "Shop-System", desc: "Shopify, WooCommerce oder nach Wahl" },
                { title: "Bis zu 10 Produkte", desc: "Einfache Lager- und Bestellverwaltung" },
                { title: "Zahlungsintegration", desc: "PayPal, Überweisung, Stripe" },
                { title: "Sichere Verbindung", desc: "SSL-Zertifikat inklusive" }
            ],
            note: ""
        },
        {
            id: 104,
            category: "webdesign",
            title: "Business-Website",
            price: "ab 899,00 €*", // raised from 799
            description: "Ideal für kleine & mittlere Unternehmen.",
            features: [
                { title: "Bis zu 5 Seiten", desc: "Vielfältige Präsentationsmöglichkeiten" },
                { title: "Kontaktformular", desc: "Inkl. DSGVO-konformem Spam-Schutz" },
                { title: "OnPage SEO", desc: "Grundoptimierung für Google & Co." },
                { title: "Wunschdesign", desc: "Individuelle Abstimmung von Farben, Schrift & Layout" }
            ],
            note: ""
        },
        {
            id: 106,
            category: "webdesign",
            title: "Premium-Website",
            price: "ab 1399,00 €*", // raised from 1249
            description: "Multilinguale, funktionsreiche Website für Unternehmen mit Ansprüchen.",
            features: [
                { title: "Bis zu 12 Seiten", desc: "Flexible Inhaltsabstimmung" },
                { title: "Mehrsprachigkeit", desc: "Automatische Umschaltung & Übersetzung" },
                { title: "Fortgeschrittene SEO", desc: "Ranking-Boost durch SEO-Maßnahmen" },
                { title: "Drittanbieterintegration", desc: "z.B. Buchung, Kalender, Social Media" },
                { title: "2 Monate Wartung gratis", desc: "Keine Extrakosten zum Start" }
            ],
            note: ""
        },
        {
            id: 201,
            category: "wartung",
            title: "Erstgespräch (Wartung)",
            price: "Kostenlos",
            description: "Kostenloses 30-Minuten Erstgespräch für Wartung & Support.",
            features: [
                { title: "Analyse", desc: "Wir schauen uns deine Anforderungen an." },
                { title: "Planung", desc: "Passendes Supportpaket auswählen" },
                { title: "Sicherheitsberatung", desc: "Empfehlungen für besseren Schutz" }
            ],
            popular: true,
            note: "Ist in jedem Paket enthalten"
        },
        {
            id: 202,
            category: "wartung",
            title: "Wartung Basis",
            price: "ab 49,00 €* / Monat",
            description: "Die sorgenfreie Grundpflege – für Sicherheit & Updates.",
            features: [
                { title: "Monatliche Updates", desc: "CMS & Plugins" },
                { title: "Backup-Service", desc: "Wöchentliche Datensicherungen" },
                { title: "Reaktionszeit: 48h", desc: "Hilfestellung bei Problemen" }
            ],
            note: ""
        },
        {
            id: 203,
            category: "wartung",
            title: "Wartung Plus",
            price: "ab 89,00 €* / Monat",
            description: "Mehr Schutz und Performance für deine Website.",
            features: [
                { title: "Wöchentliche Updates", desc: "Regelmäßige Wartung" },
                { title: "Performance-Check", desc: "Pagespeed und Optimierungen" },
                { title: "SEO Reports", desc: "Monatliche Auswertung" },
                { title: "24h Support", desc: "Ticket-System & WhatsApp" }
            ],
            note: ""
        },
        {
            id: 204,
            category: "wartung",
            title: "Security & Uptime Check",
            price: "ab 69,00 €*",
            description: "Einmalige Analyse inkl. Handlungsempfehlungen.",
            features: [
                { title: "Sicherheitscheck", desc: "CMS, Theme & Plugins" },
                { title: "Uptime-Überwachung", desc: "3 Monate aktiv" },
                { title: "Bericht & Beratung", desc: "Nach der Analyse" }
            ],
            note: ""
        },
        {
            id: 205,
            category: "wartung",
            title: "Wartung Premium",
            price: "ab 159,00 €* / Monat",
            description: "Rundum-sorglos-Schutz für anspruchsvolle Websites.",
            features: [
                { title: "Tägliche Backups", desc: "Automatische Sicherungen" },
                { title: "Notfall-Support", desc: "Reaktionszeit unter 4h" },
                { title: "Update-Tests", desc: "Jedes Update wird getestet" },
                { title: "Priorität bei Anfragen", desc: "Premium-Ticket-System" }
            ],
            note: ""
        },

        {
            id: 301,
            category: "extras",
            title: "Erstgespräch (Allgemein)",
            price: "Kostenlos",
            description: "Kostenloses 30-Minuten Erstgespräch zu allen Themen rund ums Web.",
            features: [
                { title: "Jede Projektidee", desc: "IT, Web, Beratung, uvm." },
                { title: "Keine Verpflichtung", desc: "Fragen stellen & Klarheit gewinnen" },
                { title: "Fachliche Erstberatung", desc: "Empfehlungen vom Experten" }
            ],
            popular: true,
            note: "Ist in jedem Paket enthalten"
        },
        {
            id: 302,
            category: "extras",
            title: "SEO Audit",
            price: "ab 89,00 €*",
            description: "Suchmaschinen Quick-Check mit Handlungstipps.",
            features: [
                { title: "OnPage Analyse", desc: "Ranking-Potenziale aufdecken" },
                { title: "Report als PDF", desc: "Tipps zur sofortigen Umsetzung" },
                { title: "Keyword-Recherche", desc: "Erste Empfehlungen für dich" }
            ],
            note: ""
        },
        {
            id: 303,
            category: "extras",
            title: "Content Einpflege",
            price: "ab 39,00 €* / Seite",
            description: "Wir übernehmen das Einpflegen deines Text- und Bild­materials.",
            features: [
                { title: "Text & Bilder", desc: "Perfekt platziert und optimiert" },
                { title: "Korrektur pro Seite", desc: "Eine Änderung inklusive" },
                { title: "Bilderoptimierung", desc: "Komprimierung für schnelleres Laden" }
            ],
            note: ""
        },
        {
            id: 304,
            category: "extras",
            title: "WordPress Security Check",
            price: "ab 89,00 €*",
            description: "Sicherheitsprüfung und Empfehlungen für WordPress-Seiten.",
            features: [
                { title: "Update-Beratung", desc: "Welche Plugins sind kritisch?" },
                { title: "Absicherung", desc: "Check der Nutzerkonten und Passwörter" },
                { title: "Plugin-Report", desc: "Sicherheitskritische Plugins" }
            ],
            note: ""
        },
        {
            id: 305,
            category: "extras",
            title: "Technische Generaldurchsicht",
            price: "ab 129,00 €*",
            description: "Komplette technische Durchsicht der bestehenden Website.",
            features: [
                { title: "Performance-Messung", desc: "Ladezeiten mit Empfehlungen" },
                { title: "Strukturprüfung", desc: "Logik, Sicherheit & Zukunftsfähigkeit" },
                { title: "Detailierter Bericht", desc: "Als PDF & mündlich erklärt" },
                { title: "Kurze Nachberatung", desc: "Bis zu 15 Minuten kostenlos" }
            ],
            note: ""
        },

        {
            id: 401,
            category: "minecraft",
            title: "Erstgespräch (Minecraft)",
            price: "Kostenlos",
            description: "Kostenloses Kennenlernen für individuelle Minecraft-Projekte.",
            features: [
                { title: "Projektbesprechung", desc: "Finde deine Plugin-Lösung schnell" },
                { title: "100% kostenlos", desc: "Vor Entwicklung & Angebot" },
                { title: "Ideenbewertung", desc: "Machbarkeitscheck in Echtzeit" }
            ],
            popular: true,
            note: "Ist in jedem Paket enthalten"
        },
        {
            id: 402,
            category: "minecraft",
            title: "Minecraft: Basis-Plugin",
            price: "ab 89,00 €*",
            description: "Individuelles Server-Feature, schnell & günstig.",
            features: [
                { title: "Custom Commands", desc: "Maßgeschneiderte Funktionen" },
                { title: "1 Version Support", desc: "1 Minecraft-Version garantiert" },
                { title: "Kleine Configs", desc: "Einfache Einstellungsmöglichkeiten" }
            ],
            note: ""
        },
        {
            id: 403,
            category: "minecraft",
            title: "Minecraft: Projekt-Plugin",
            price: "ab 219,00 €*",
            description: "Größeres Server-Plugin nach Wunsch.",
            features: [
                { title: "Komplexe Logik", desc: "Wirtschaft, Mobs, usw." },
                { title: "Schnittstellen", desc: "Datenbank, Discord, Web" },
                { title: "Support", desc: "2 Versionen inklusive" },
                { title: "Konfigurierbare Permissions", desc: "Für verschiedene Spielmodi" }
            ],
            note: ""
        },
        {
            id: 404,
            category: "minecraft",
            title: "Minecraft: Netzwerk-Komplett",
            price: "ab 329,00 €*",
            description: "Großes Plugin oder mehrere Komponenten (Enterprise).",
            features: [
                { title: "Alles aus einer Hand", desc: "Von Planung bis Betrieb" },
                { title: "Performance-Checks", desc: "Auch für große Server" },
                { title: "Individuelle Beratung", desc: "Ab Kickoff-Gespräch inklusive" },
                { title: "Cluster-Support", desc: "Mehrere Server, ein System" }
            ],
            note: ""
        },
        {
            id: 405,
            category: "minecraft",
            title: "Mod-Integration & Speziallösungen",
            price: "ab 499,00 €*",
            description: "Individuelle Mod-Kompatibilität & exklusive Funktionen.",
            features: [
                { title: "Mod-Kompatibilität", desc: "Forge, Fabric, Bukkit etc." },
                { title: "Custom GUIs", desc: "Eigene Menüs für deinen Server" },
                { title: "Langzeit-Support", desc: "Updates & Anpassungen nach Bedarf" },
                { title: "Optional: Web-Anbindung", desc: "Statistiken, Admin-Panel online" }
            ],
            note: ""
        },
        {
            id: 501,
            category: "extras",
            title: "Erstgespräch (Sonstiges)",
            price: "Kostenlos",
            description: "Kostenloses Kennenlernen für individuelle Projekte.",
            features: [
                { title: "Projektbesprechung", desc: "Finde deine Lösung schnell" },
                { title: "100% kostenlos", desc: "Keine versteckten Kosten" },
                { title: "Ideenbewertung", desc: "Machbarkeitscheck in Echtzeit" }
            ],
            popular: true,
            note: "Für jegliche Projekte, die nicht in den anderen Kategorien fallen."
        },
    ];

    const onSelect = (id: number) => {
        setSelected(curr => curr.includes(id) ? curr.filter(v => v !== id) : [...curr, id]);
    };

    const validate = (field: keyof typeof form, value: string) => {
        if (field === "name") return value.trim() ? "" : "Name darf nicht leer sein.";
        if (field === "email") return /\S+@\S+\.\S+/.test(value) ? "" : "Gültige E-Mail-Adresse erforderlich.";
        if (field === "phone") return /^\+?[0-9\s\-]{7,}$/.test(value) ? "" : "Gültige Telefonnummer erforderlich.";
        return "";
    };

    const onInput = (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setForm(f => ({ ...f, [field]: value }));
        setFormErrors(err => ({ ...err, [field]: validate(field, value) }));
    };

    const checkForm = () => {
        const next: typeof formErrors = {};
        (Object.keys(form) as (keyof typeof form)[]).forEach(f => {
            const err = validate(f, form[f]);
            if (err) next[f] = err;
        });
        setFormErrors(next);
        return Object.keys(next).length === 0;
    };

    const selectedDetails = products.filter(x => selected.includes(x.id));

    return (
        <Flex fill direction="column" center paddingTop="xl" marginTop="xl" transition="macro-long">
            <Column center fill gap="s">
                <Flex horizontal="center" vertical="center">
                    <Heading variant="display-strong-xs">Entdecke unsere Angebote</Heading>
                </Flex>
                <Text variant="body-strong-m">Wähle das passende Paket für deine Anforderungen</Text>
            </Column>
            <Column fill center>
                <SegmentedControl
                    fitWidth
                    padding="16"
                    selected={filter}
                    buttons={filters.map(f => ({ value: f.id, children: f.label }))}
                    onToggle={setFilter}
                />
            </Column>
            <Flex fitHeight fillWidth center direction="column" gap="xs">
                {filter === "webdesign" && (
                    <Badge
                        textVariant="body-default-xs"
                        maxWidth={30}
                        align="center"
                        background="accent-weak"
                        center
                    >
                        Bei jeder Website-Erstellung sind die ersten 3 Monate Support, Text-/Bildänderungen und Korrekturen inklusive!
                    </Badge>
                )}
                <Column padding="m" center>
                    <Text variant="body-default-xs" onBackground="info-weak" align="center">
                        * Es handelt sich bei den Preisen um Richtwerte, die Preise orientieren sich an Arbeitsstunden, Aufwand etc.
                    </Text>
                </Column>
                <Scroller direction="row" center paddingX="xl" borderRight="transparent">
                    <Flex gap="m" direction="row" fill minWidth={25} maxWidth={25} minHeight={35} maxHeight={40}>
                        {products
                            .filter(x => filter === "all" || x.category === filter)
                            .map(product => (
                                <Card
                                    key={product.id}
                                    width={mobile ? 22 : 25}
                                    height={mobile ? 27 : 30}
                                    padding="40"
                                    radius="xl"
                                    direction="column"
                                    shadow="s"
                                    onBackground="brand-strong"
                                    border={product.popular ? "accent-alpha-medium" : "surface"}
                                >
                                    {selected.includes(product.id) && (
                                        <Background
                                            position="absolute"
                                            radius="xl"
                                            mask={{
                                                x: 50,
                                                y: 100,
                                                radius: 80,
                                            }}
                                            gradient={{
                                                display: true,
                                                x: 50,
                                                y: 100,
                                                width: 100,
                                                height: 100,
                                                tilt: Math.random() * 200 - 100,
                                                opacity: 80,
                                                colorStart: "neutral-alpha-strong",
                                                colorEnd: "page-background",
                                            }}
                                            zIndex={0}
                                        />
                                    )}
                                    <Flex
                                        fillHeight
                                        center
                                        direction="column"
                                        vertical="start"
                                        horizontal="start"
                                        onClick={() => onSelect(product.id)}
                                    >
                                        <Column fill horizontal="end" position="absolute" bottom="0" right="0">
                                            <Text onBackground="info-weak">
                                                {filters.find(f => f.id === product.category)?.label || product.category}
                                            </Text>
                                        </Column>
                                        <Flex fill vertical="start" horizontal="start" direction="column">
                                            <Column minHeight={4} gap="xs" margin="l">
                                                <Heading as="h4">{product.title}</Heading>
                                                <Text variant="body-default-s">{product.description}</Text>
                                            </Column>
                                            <Line />
                                            <Column fillWidth center marginTop="xs" marginBottom="xs">
                                                {product.price && (
                                                    <Text variant="body-default-l">{product.price}</Text>
                                                )}
                                                {!product.price && product.title && (
                                                    <Text variant="body-default-s">{product.title}</Text>
                                                )}
                                            </Column>
                                            <Line />
                                            <Column fillHeight gap="s" vertical="start" horizontal="start" padding="xs">
                                                {product.features.map((feature, idx) => (
                                                    <Row key={idx} gap="xs" center fitHeight>
                                                        <Icon name="checkCircle" size="s" />
                                                        <Column>
                                                            <Text variant="body-default-s">{feature.title}</Text>
                                                            <Text variant="body-default-xs">{feature.desc}</Text>
                                                        </Column>
                                                    </Row>
                                                ))}
                                            </Column>
                                            <Column fillWidth>
                                                {product.note && (
                                                    <Text variant="body-default-s" style={{ marginTop: 4 }}>
                                                        {product.note}
                                                    </Text>
                                                )}
                                            </Column>
                                        </Flex>
                                    </Flex>
                                    <Column horizontal="end" fillWidth position="absolute" top="16" right="16">
                                        <Icon
                                            name={selected.includes(product.id) ? "minus" : "plus"}
                                            transition="macro-medium"
                                        />
                                    </Column>
                                </Card>
                            ))}
                    </Flex>
                </Scroller>
            </Flex>
            <Dialog
                title="Produktanfrage"
                isOpen={open}
                onClose={() => setOpen(false)}
                transition="macro-medium"
                zIndex={10}
            >
                <Column padding="m" gap="s" horizontal="space-between" vertical="center">
                    <Column fill>
                        <Heading variant="heading-strong-m">Zusammenfassung deiner Auswahl</Heading>
                        <Text variant="body-default-m" onBackground="info-weak">
                            Du hast <strong>{selectedDetails.length}</strong> Paket{selectedDetails.length > 1 ? "e" : ""} ausgewählt.
                        </Text>
                        <Table
                            data={{
                                headers: [
                                    { content: "Paket", key: "title", sortable: true },
                                    { content: "Preis", key: "price" },
                                ],
                                rows: selectedDetails.map((p) => [p.title, p.price || p.title]),
                            }}
                        />
                    </Column>
                    <Column gap="s" padding="s">
                        <Input
                            id="name"
                            label="👤 Dein Name"
                            value={form.name}
                            onChange={onInput("name")}
                            placeholder="Justin Eiletz"
                            errorMessage={formErrors.name}
                        />
                        <Input
                            id="email"
                            label="📧 E-Mail-Adresse"
                            value={form.email}
                            onChange={onInput("email")}
                            type="email"
                            placeholder="justin.eiletz@jexcellence.de"
                            errorMessage={formErrors.email}
                        />
                        <Input
                            id="phone"
                            label="📞 Telefonnummer"
                            value={form.phone}
                            onChange={onInput("phone")}
                            type="tel"
                            placeholder="+49 157 70433689"
                            errorMessage={formErrors.phone}
                        />
                        <Textarea
                            id="information"
                            label="💬 Sonstige Informationen"
                            value={form.message}
                            onChange={onInput("message")}
                            errorMessage={formErrors.message}
                        />
                    </Column>
                    <Flex gap="m" direction="row" center>
                        <Button
                            label="Per Email senden"
                            variant="secondary"
                            onClick={() => {
                                if (checkForm()) {
                                    const productList = selectedDetails.map(p => `- ${p.title} (${p.price})`).join('%0A');
                                    const subject = encodeURIComponent(`Anfrage von ${form.name || 'Kunde'} via Jexcellence Website`);
                                    const body = encodeURIComponent(
                                        `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\nAusgewählte Pakete:\n${productList}\n\nNachricht:\n${form.message}`
                                    );
                                    window.open(`mailto:justin.eiletz@jexcellence.de?subject=${subject}&body=${body}`);
                                    setOpen(false);
                                    setFormErrors({});
                                    setForm({ name: '', phone: '', message: '', email: '' });
                                    setSelected([]);
                                    addToast({
                                        variant: "success",
                                        message: "Danke! Ich melde mich in Kürze bei dir."
                                    });
                                }
                            }}
                        />
                        <Button
                            label="Per WhatsApp senden"
                            variant="secondary"
                            onClick={() => {
                                if (checkForm()) {
                                    const productList = selectedDetails.map(p => `- ${p.title} (${p.price})`).join('%0A');
                                    const text = encodeURIComponent(
                                        `Anfrage von ${form.name}\n📧 ${form.email}\n📞 ${form.phone}\n\nPakete:\n${productList}\n\n${form.message}`
                                    );
                                    window.open(`https://wa.me/+4915770433689?text=${text}`);
                                    setOpen(false);
                                    setFormErrors({});
                                    setForm({ name: '', phone: '', message: '', email: '' });
                                    setSelected([]);
                                    addToast({
                                        variant: "success",
                                        message: "Danke! Ich melde mich in Kürze bei dir."
                                    });
                                }
                            }}
                        />
                    </Flex>
                    <Column gap="xs" paddingTop="s">
                        <Text variant="body-default-xs" onBackground="info-weak" align="center">
                            *Es handelt sich bei den Preisen um Richtwerte, die Preise orientieren sich an Arbeitsstunden, Aufwand etc.
                        </Text>
                        <Text variant="body-default-xs" onBackground="info-weak" align="center">
                            Deine Daten werden nur zur Bearbeitung deiner Anfrage verwendet. Keine Weitergabe an Dritte.
                        </Text>
                    </Column>
                </Column>
            </Dialog>
            {selected.length > 0 && (
                <Column
                    position="fixed"
                    bottom="0"
                    right="16"
                    padding="m"
                    margin="m"
                    zIndex={5}
                >
                    <Button
                        fillWidth
                        variant="primary"
                        size="l"
                        suffixIcon="messageCircle"
                        label={`Jetzt anfragen (${selected.length} ${selected.length === 1 ? "Paket" : "Pakete"})`}
                        onClick={() => setOpen(true)}
                        className={styles.requestButton}
                    />
                </Column>
            )}
        </Flex>
    );
};

PricingSection.displayName = "PricingSection";

export { PricingSection };
