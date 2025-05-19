"use client";

import { Row, Flex, Badge, BadgeProps } from "@/once-ui/components";
import styles from "./TechCarousel.module.scss";
import { IconName } from "@/once-ui/icons";
import React from "react";
import { SpacingToken } from "@/once-ui/types";
import classNames from "classnames";

const defaultIconMap: Record<string, IconName> = {
	java: "java",
	typescript: "typescript",
	javascript: "js",
	spring: "spring",
	hibernate: "hibernate",
	react: "react",
	angular: "angular",
	vue: "vue",
	nodejs: "node",
	postgresql: "postgres",
	mysql: "mysql",
	mongodb: "mongo",
	docker: "docker",
	kubernetes: "kubernetes",
	aws: "aws",
	gcp: "gcp",
	git: "git",
	graphql: "graphql",
	redis: "redis",
	nginx: "nginx"
};

interface TechItem {
	name: string;
	icon?: IconName;
}

interface TechCarouselProps extends Partial<BadgeProps> {
	items: TechItem[];
	textVariant?: BadgeProps["textVariant"];
	spacing?: SpacingToken | "-1" | undefined;
	iconMap?: Record<string, IconName>;
}

const TechCarousel = ({
						  items,
						  textVariant = "body-default-s",
						  spacing = "s",
						  iconMap = {},
					  }: TechCarouselProps) => {
	const mergedIconMap = { ...defaultIconMap, ...iconMap };

	return (
		<Row position="relative" overflow="hidden" margin="xl">
			<Flex gap={spacing} className={classNames(styles.marqueeContent)}>
				{[...items, ...items].map((item, index) => (
					<Badge
						key={index}
						onBackground="neutral-weak"
						background="transparent"
						borderBottom="accent-strong"
						shadow="xs"
						textVariant={textVariant}
						icon={item.icon || mergedIconMap[item.name]}
						title={item.name}
					/>
				))}
			</Flex>
		</Row>
	);
};

TechCarousel.displayName = "TechCarousel";

export { TechCarousel, defaultIconMap };
