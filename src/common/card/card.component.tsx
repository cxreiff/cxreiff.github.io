import { FC, ReactElement } from "react";
import cn from "classnames";

import { Image } from "~/src/common/image/image.component";
import styles from "./card.module.scss";

export type CardProps = {
  image?: string;
  primary?: string;
  secondary?: string | ReactElement;
  tertiary?: string | ReactElement;
  onClick?: () => void;
  className?: string;
};

export const Card: FC<CardProps> = ({
  image,
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
    {image && (
      <div>
        <Image source={image} aspect={9 / 5} />
      </div>
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
