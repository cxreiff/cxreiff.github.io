import { FC, useState } from 'react'
import cn from 'classnames'

type ImageProps = {
    aspect: number,
    source: string,
    alt?: string,
    className?: string,
}

import styles from './image.module.scss'

export const Image: FC<ImageProps> = ({ aspect, source, alt, className }) => {

    const [loaded, setLoaded] = useState(false)

    return (
        <div className={cn(styles.image, className, { [styles.hidden]: !loaded })}>
            <img src={source} onLoad={() => setLoaded(true)} alt={alt} />
            <svg viewBox={`0 0 ${aspect} 1`} />
        </div>
    )
}
