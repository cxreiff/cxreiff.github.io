import cn from "classnames";

import { Card, CardProps } from "./card.component";

import styles from "./cardAction.module.scss";

type CardActionProps = {
  matchHeight?: boolean;
} & Omit<CardProps, "secondary" | "tertiary">;

export const CardAction = ({
  matchHeight = false,
  className,
  ...props
}: CardActionProps) => (
  <Card
    className={cn(className, styles.card_action, {
      [styles.match_height]: matchHeight,
    })}
    {...props}
  />
);
