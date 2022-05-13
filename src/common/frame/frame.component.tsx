import { FC, ReactElement, cloneElement } from 'react'
import cn from 'classnames'

type FrameProps = {
    aspect: number,
    loaded: boolean,
    className?: string,
    children: ReactElement,
}

import styles from './frame.module.scss'

export const Frame: FC<FrameProps> = ({ aspect, loaded, className, children: child }) => (
    <div className={cn(styles.frame, className, { [styles.hidden]: !loaded })}>
        {cloneElement(child, {
            className: cn((child.props as { className?: string }).className, styles.content),
        })}
        <svg viewBox={`0 0 ${aspect} 1`} />
    </div>
)
