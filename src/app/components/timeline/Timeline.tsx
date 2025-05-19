"use client";

import { Column, Row, Icon, Text, Line, RevealFx, Heading } from "@/once-ui/components";
import classNames from "classnames";
import styles from "./Timeline.module.scss";

type TimelineItem = {
	year: string;
	title: string;
	icon?: string;
};

type TimelineProps = {
	items: TimelineItem[];
	variant?: "vertical" | "horizontal";
	iconSize?: "s" | "m" | "l";
	className?: string;
};

const Timeline = ({
					  items,
					  variant = "vertical",
					  iconSize = "m",
					  className = "",
				  }: TimelineProps) => {
	const isVertical = variant === "vertical";

	return (
		<div className={classNames(className, styles.timeline, { [styles.vertical]: isVertical, [styles.horizontal]: !isVertical })}>
			{items.map((item, index) => (
				<RevealFx key={item.year + index} delay={index * 0.1}>
					<div className={styles.item}>
						<div className={styles.marker}>
							<Icon name={item.icon || "sparkle"} size={iconSize} color="brand-weak" />
							{isVertical && index < items.length - 1 && <Line className={styles.line} />}
						</div>
						<div className={styles.content}>
							<Text variant="label-strong-m" color="neutral-weak">{item.year}</Text>
							<Heading variant="heading-strong-m">{item.title}</Heading>
						</div>
					</div>
				</RevealFx>
			))}
		</div>
	);
};

Timeline.displayName = "Timeline";

export { Timeline };
