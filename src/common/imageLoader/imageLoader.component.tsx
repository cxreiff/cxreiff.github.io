import { FC, useState } from 'react'
import cn from 'classnames'
import { Lightbox } from 'react-modal-image'

import * as styles from './imageLoader.module.scss'

type ImageLoaderProps = {
  src: string,
  alt?: string,
  className?: string,
}

export const ImageLoader: FC<ImageLoaderProps> = ({ src, alt, className }) => {

  const [loaded, setLoaded] = useState(false)
  const [opened, setOpened] = useState(false)

  return (
    <div className={cn(styles.image_loader, className, { [styles.hidden]: !loaded })}>
      <svg viewBox={'0 0 100 100'}>
        <rect width={'100'} height={'100'} />
      </svg>
      <img src={src} onLoad={() => setLoaded(true)} onClick={() => setOpened(true)} />
      { opened && <Lightbox medium={src} alt={alt} onClose={() => setOpened(false)} /> }
    </div>
  )
}
