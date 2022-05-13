import { FC, useState } from 'react'

type ImageProps = {
    aspect: number,
    source: string,
    alt?: string,
    className?: string,
}

import { Frame } from '~/src/common/frame/frame.component'

export const Image: FC<ImageProps> = ({ aspect, source, alt, className }) => {

    const [loaded, setLoaded] = useState(false)

    return (
        <Frame aspect={aspect} loaded={loaded} className={className}>
            <img src={source} onLoad={() => setLoaded(true)} alt={alt} />
        </Frame>
    )
}
