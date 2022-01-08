import { FC, useState } from 'react'
import cn from 'classnames'
import { Lightbox } from 'react-modal-image'

import * as styles from './imageLoader.module.scss'

type ImageLoaderProps = {
  small: string,
  medium: string,
  large: string,
  alt?: string,
  className?: string,
}

export const ImageLoader: FC<ImageLoaderProps> = ({ small, medium, large, alt, className }) => {

  const [loaded, setLoaded] = useState(false)
  const [opened, setOpened] = useState(false)

  return (
    <div className={cn(styles.image_loader, className, { [styles.hidden]: !loaded })}>
      <svg viewBox={'0 0 100 100'}>
        <rect width={'100'} height={'100'} />
      </svg>
      <img src={small} onLoad={() => setLoaded(true)} onClick={() => setOpened(true)} />
      { opened && (
        <Lightbox
          medium={medium}
          large={large}
          alt={alt}
          hideDownload={true}
          onClose={() => setOpened(false)}
        />
      )}
    </div>
  )
}
