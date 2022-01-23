import { FC } from 'react'
import cn from 'classnames'

import * as styles from './card.module.scss'

type CardProps = {
    onClick?: () => void,
    primary: string,
    secondary?: string,
    tertiary?: string,
}

export const Card: FC<CardProps> = ({ onClick, primary, secondary, tertiary }) => (
    <article
        className={cn(styles.card, { [styles.card_clickable]: onClick })}
        onClick={onClick}
    >
        <header>
            <h4>
                {primary}
            </h4>
        </header>
        {secondary && <footer>
            {secondary}
        </footer>}
        {tertiary && <p>
            {tertiary}
        </p>}
    </article>
)
