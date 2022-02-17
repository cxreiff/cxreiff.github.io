import { FC } from 'react'
import cn from 'classnames'

import * as styles from './card.module.scss'

type CardProps = {
    image?: string,
    primary?: string,
    secondary?: string,
    tertiary?: string,
    onClick?: () => void,
}

export const Card: FC<CardProps> = ({ image, primary, secondary, tertiary, onClick }) => (
    <article
        className={cn(styles.card, { [styles.card_clickable]: onClick })}
        onClick={onClick}
    >
        {image && (
            <img src={image} />
        )}
        {primary && (
            <header>
                <h4>
                    {primary}
                </h4>
            </header>
        )}
        {secondary && (
            <footer>
                {secondary}
            </footer>
        )}
        {tertiary && (
            <p>
                {tertiary}
            </p>
        )}
    </article>
)
