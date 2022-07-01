import { FC, ReactElement, SVGProps, useState } from 'react'
import cn from 'classnames'

type ImageSvgOverlayProps = {
    aspect: number,
    source: string,
    alt?: string,
    className?: string,
    children: ReactElement<SVGProps<SVGElement>>,
}

import { Frame } from '~/src/common/frame/frame.component'

import styles from './imageSvgOverlay.module.scss'

export const ImageSvgOverlay: FC<ImageSvgOverlayProps> = ({ aspect, source, alt, className, children: svg }) => {

    const [loading, setLoading] = useState(true)

    return (
        <Frame aspect={aspect} loading={loading} className={cn(className, styles.image_svg_overlay)}>
            <img src={source} onLoad={() => setLoading(false)} alt={alt} />
            {!loading && svg}
        </Frame>
    )
}
