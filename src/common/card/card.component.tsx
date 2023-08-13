import { FC, ReactElement } from "react";
import cn from "classnames";

import styles from "./card.module.scss";

export type CardProps = {
  svg?: string;
  primary?: string;
  secondary?: string | ReactElement;
  tertiary?: string | ReactElement;
  onClick?: () => void;
  className?: string;
};

export const Card: FC<CardProps> = ({
  svg,
  primary,
  secondary,
  tertiary,
  onClick,
  className,
}) => (
  <article
    className={cn(className, styles.card, { [styles.card_clickable]: onClick })}
    onClick={onClick}
  >
    {svg && (
      <div
        className={styles.svg}
        style={{ mask: `url(${svg}) no-repeat center / contain` }}
      />
    )}
    {primary && (
      <header>
        <h4>{primary}</h4>
      </header>
    )}
    {secondary && <footer>{secondary}</footer>}
    {tertiary && <p>{tertiary}</p>}
  </article>
);
