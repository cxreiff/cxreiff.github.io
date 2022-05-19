import { FC, ReactElement, CSSProperties, cloneElement } from 'react'
import cn from 'classnames'

type FrameProps = {
    aspect: number,
    loaded?: boolean,
    className?: string,
    style?: CSSProperties,
    children: ReactElement,
}

import styles from './frame.module.scss'

export const Frame: FC<FrameProps> = ({ aspect, loaded = true, className, style, children: child }) => (
    <div className={cn(styles.frame, className, { [styles.hidden]: !loaded })} style={style}>
        {cloneElement(child, {
            className: cn((child.props as { className?: string }).className, styles.content),
        })}
        <svg viewBox={`0 0 ${aspect} 1`} />
    </div>
)
