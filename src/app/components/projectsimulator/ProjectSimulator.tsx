"use client";
import React, {ChangeEvent, useEffect, useState} from "react";
import {
    Background,
    Badge,
    Button,
    Card,
    Column, Dialog,
    Flex,
    Heading,
    Icon, Input, Line,
    Row, Scroller,
    SegmentedControl, Table,
    Text, Textarea, useToast,
} from "@/once-ui/components";
import styles from "./ProjectSimulator.module.scss"

const PricingSection = () => {
    const [activeFilter, setActiveFilter] = useState("webdesign");
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const [showDialog, setShowDialog] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [isMobile, setIsMobile] = useState(false);
    const [formErrors, setFormErrors] = useState<{ [K in keyof typeof form]?: string }>({});
    const { addToast } = useToast();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleProduct = (id: number) => {
        setSelectedProducts(prev =>
            prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
        );
    };

    const validateField = (field: keyof typeof form, value: string) => {
        switch (field) {
            case "name":
                return value.trim() ? "" : "Name darf nicht leer sein.";
            case "email":
                return /\S+@\S+\.\S+/.test(value) ? "" : "Gültige E-Mail-Adresse erforderlich.";
            case "phone":
                return /^\+?[0-9\s\-]{7,}$/.test(value) ? "" : "Gültige Telefonnummer erforderlich.";
            default:
                return "";
        }
    };

    const handleInputChange = (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setForm(prev => ({ ...prev, [field]: value }));
        setFormErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    };

    const validateForm = () => {
        const newErrors: typeof formErrors = {};
        (Object.keys(form) as (keyof typeof form)[]).forEach((field) => {
            const error = validateField(field, form[field]);
            if (error) newErrors[field] = error;
        });
        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const filters = [
        { id: "all", label: "Alle Pakete" },
        { id: "webdesign", label: "Webdesign" },
        { id: "wartung", label: "Wartung" },
        { id: "extras", label: "Extras" },
        { id: "minecraft", label: "Minecraft" },
    ];

    const products = [
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
        {
            id: 102,
            category: "webdesign",
            title: "Landingpage Express",
            price: "ab 379,00 €*",
            description: "Deine neue Landingpage in 48h zum Festpreis.",
            features: [
                { title: "Schnelle Umsetzung", desc: "Fertig in 48 Stunden (nach Briefing)" },
                { title: "Responsive", desc: "Für alle Geräte optimiert" },
                { title: "1 Revision inklusive", desc: "Korrekturschleife kostenlos" },
                { title: "DSGVO-Check", desc: "Rechtliche Pflichtangaben enthalten" }
            ]
        },
        {
            id: 103,
            category: "webdesign",
            title: "Starter-Website",
            price: "ab 249,00 €*",
            description: "Der günstige Einstieg – ideal für Einzelunternehmer und Vereine.",
            features: [
                { title: "OnePage-Design", desc: "Moderne, scrolldynamische Startseite" },
                { title: "Mobile-optimiert", desc: "Optimale Darstellung auf jedem Gerät" },
                { title: "Domain & E-Mail", desc: "1 Jahr inkl. .de-Domain & E-Mail" }
            ],
            note: ""
        },
        {
            id: 104,
            category: "webdesign",
            title: "Business-Website",
            price: "ab 799,00 €*",
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
            id: 105,
            category: "webdesign",
            title: "Webshop Mini",
            price: "ab 379,00 €*",
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
            id: 106,
            category: "webdesign",
            title: "Premium-Website",
            price: "ab 1249,00 €*",
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

    const selectedDetails = products.filter(p => selectedProducts.includes(p.id));

    return (
        <Flex fill direction="column" center paddingTop="xl" marginTop="xl" transition="macro-long">
            <Column center fill gap="s">
                <Flex horizontal="center" vertical="center">
                    <Heading variant="display-strong-xs">Entdecke unsere Angebote</Heading>
                </Flex>
                <Text variant="body-strong-m">
                    Wähle das passende Paket für deine Anforderungen
                </Text>
            </Column>

            <Column fill center>
                <SegmentedControl
                    fitWidth
                    padding="16"
                    selected={activeFilter}
                    buttons={filters.map(filter => ({
                        value: filter.id,
                        children: filter.label,
                    }))}
                    onToggle={(filter) => setActiveFilter(filter)}
                />
            </Column>

            <Flex fitHeight fillWidth center direction="column" gap="xs">
                <Column padding="m" center>
                    <Text variant="body-default-xs" onBackground="info-weak" align="center">
                        * Es handelt sich bei den Preisen um Richtwerte, die Preise orientieren sich an Arbeitsstunden, Aufwand etc.
                    </Text>
                </Column>
                <Scroller direction="row" center paddingX="xl" borderRight="transparent">
                    <Flex gap="m" direction="row" fill minWidth={25} maxWidth={25} minHeight={35} maxHeight={40}>
                        {products
                            .filter(product => activeFilter === "all" || product.category === activeFilter)
                            .map(product => (
                                <Card
                                    key={product.id}
                                    width={isMobile ? 22 : 25}
                                    height={isMobile ? 27 : 30}
                                    padding="40"
                                    radius="xl"
                                    direction="column"
                                    shadow="s"
                                    onBackground="brand-strong"
                                    background="info-medium"
                                    border={product.popular ? "accent-alpha-medium" : "surface"}
                                >
                                    {selectedProducts.includes(product.id) && (
                                    <Background
                                        position="absolute"
                                        radius="xl"
                                        mask={{
                                            x: 50,
                                            y: 100,
                                            radius: 40,
                                        }}
                                        gradient={{
                                            display: true,
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            tilt: 0,
                                            opacity: 60,
                                            colorStart: "page-background",
                                            colorEnd: "accent-alpha-strong"
                                        }}
                                    />
                                    )}
                                    <Flex
                                        fillHeight
                                        center
                                        direction="column"
                                        vertical="start"
                                        horizontal="start"
                                        onClick={() => toggleProduct(product.id)}
                                    >
                                        <Column fill horizontal="end" position="absolute" bottom="0" right="0">
                                            <Text onBackground="info-weak">
                                                {filters.find(f => f.id === product.category)?.label || product.category}
                                            </Text>
                                        </Column>

                                        <Flex fill vertical="start" horizontal="start" direction="column" gap="s">
                                            <Column minHeight={4} gap="xs">
                                                <Heading as="h3">{product.title}</Heading>
                                                <Text variant="body-default-s">{product.description}</Text>
                                            </Column>
                                            <Line />
                                            <Column fillWidth center>
                                                {product.price && (
                                                    <Text variant="body-default-l">{product.price}</Text>
                                                )}
                                                {!product.price && product.title && (
                                                    <Text variant="body-default-s">{product.title}</Text>
                                                )}
                                            </Column>
                                            <Line />

                                            <Column fillHeight gap="s" vertical="start" horizontal="start">
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
                                            name = {selectedProducts.includes(product.id) ? "minus" : "plus"}
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
                isOpen={showDialog}
                onClose={() => setShowDialog(false)}
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
                                rows: selectedDetails.map((product) => [
                                    product.title,
                                    product.price || product.title,
                                ]),
                            }}
                        />
                    </Column>

                    <Column gap="s" padding="s">
                        <Input
                            id="name"
                            label="👤 Dein Name"
                            value={form.name}
                            onChange={handleInputChange("name")}
                            placeholder="Justin Eiletz"
                            errorMessage={formErrors.name}
                        />
                        <Input
                            id="email"
                            label="📧 E-Mail-Adresse"
                            value={form.email}
                            onChange={handleInputChange("email")}
                            type="email"
                            placeholder="justin.eiletz@jexcellence.de"
                            errorMessage={formErrors.email}
                        />
                        <Input
                            id="phone"
                            label="📞 Telefonnummer"
                            value={form.phone}
                            onChange={handleInputChange("phone")}
                            type="tel"
                            placeholder="+49 157 70433689"
                            errorMessage={formErrors.phone}
                        />
                        <Textarea
                            id="information"
                            label="💬 Sonstige Informationen"
                            value={form.message}
                            onChange={handleInputChange("message")}
                            errorMessage={formErrors.message}
                        />
                    </Column>

                    <Flex gap="m" direction="row" center>
                        <Button
                            label="Per Email senden"
                            variant="secondary"
                            onClick={() => {
                                const isValid = validateForm();
                                if (isValid) {
                                    const productList = selectedDetails.map(p => `- ${p.title} (${p.price})`).join('%0A');
                                    const subject = encodeURIComponent(`Anfrage von ${form.name || 'Kunde'} via Jexcellence Website`);
                                    const body = encodeURIComponent(
                                        `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone}\n\nAusgewählte Pakete:\n${productList}\n\nNachricht:\n${form.message}`
                                    );
                                    window.open(`mailto:justin.eiletz@jexcellence.de?subject=${subject}&body=${body}`);

                                    setShowDialog(false);
                                    setFormErrors({});
                                    setForm({
                                        name: '',
                                        phone: '',
                                        message: '',
                                        email: ''
                                    });
                                    setSelectedProducts([])

                                    addToast({
                                        variant: "success",
                                        message: "Danke! Ich melde mich in Kürze bei dir."
                                    })
                                }
                            }}
                        />
                        <Button
                            label="Per WhatsApp senden"
                            variant="secondary"
                            onClick={() => {
                                const isValid = validateForm();
                                if (isValid) {
                                    const productList = selectedDetails.map(p => `- ${p.title} (${p.price})`).join('%0A');
                                    const text = encodeURIComponent(
                                        `Anfrage von ${form.name}\n📧 ${form.email}\n📞 ${form.phone}\n\nPakete:\n${productList}\n\n${form.message}`
                                    );
                                    window.open(`https://wa.me/+4915770433689?text=${text}`);

                                    setShowDialog(false);
                                    setFormErrors({});
                                    setForm({
                                        name: '',
                                        phone: '',
                                        message: '',
                                        email: ''
                                    });
                                    setSelectedProducts([])

                                    addToast({
                                        variant: "success",
                                        message: "Danke! Ich melde mich in Kürze bei dir."
                                    })
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


            {selectedProducts.length > 0 && (
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
                        label={`Jetzt anfragen (${selectedProducts.length} ${selectedProducts.length === 1 ? 'Paket' : 'Pakete'})`}
                        onClick={() => setShowDialog(true)}
                        className={styles.requestButton}
                    />

                </Column>
            )}
        </Flex>
    );
};

export default PricingSection;
