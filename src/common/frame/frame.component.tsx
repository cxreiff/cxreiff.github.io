import { FC, ReactNode, CSSProperties } from 'react'
import cn from 'classnames'

type FrameProps = {
    aspect: number,
    loading?: boolean,
    className?: string,
    style?: CSSProperties,
    children: ReactNode,
}

import styles from './frame.module.scss'

export const Frame: FC<FrameProps> = ({ aspect, loading = false, className, style, children }) => (
    <div className={cn(styles.frame, className, { [styles.hidden]: loading })} style={style}>
        {children}
        <svg viewBox={`0 0 ${aspect} 1`} />
    </div>
)
