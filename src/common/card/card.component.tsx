import { FC, ReactElement } from 'react'
import cn from 'classnames'

import { Image } from '~/src/common/image/image.component'
import styles from './card.module.scss'

type CardProps = {
    image?: string,
    primary?: string,
    secondary?: string | ReactElement,
    tertiary?: string | ReactElement,
    onClick?: () => void,
}

export const Card: FC<CardProps> = ({ image, primary, secondary, tertiary, onClick }) => (
    <article
        className={cn(styles.card, { [styles.card_clickable]: onClick })}
        onClick={onClick}
    >
        {image && (
            <div>
                <Image source={image} aspect={800/500} />
            </div>
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
