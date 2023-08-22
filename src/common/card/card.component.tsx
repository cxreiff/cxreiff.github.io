import { ReactNode } from "react";
import cn from "classnames";

import styles from "./card.module.scss";

export type CardProps = {
  svg?: string;
  primary?: string;
  secondary?: ReactNode;
  tertiary?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const Card = ({
  svg,
  primary,
  secondary,
  tertiary,
  onClick,
  className,
}: CardProps) => (
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
    {(primary || secondary) && (
      <div className={styles.title}>
        {primary && (
          <header>
            <h4>{primary}</h4>
          </header>
        )}
        {secondary && <footer>{secondary}</footer>}
      </div>
    )}
    {tertiary && <p>{tertiary}</p>}
  </article>
);
