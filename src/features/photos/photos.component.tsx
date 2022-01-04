import { FC, useEffect } from 'react'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { ImageLoader } from '~/src/common/imageLoader/imageLoader.component'
import { OBJECT_STORE_ASSETS_URL } from '~/src/utilities/constants'

import { fetchPhotos } from './photos.slice'

import * as styles from './photos.module.scss'

const Photos: FC = () => {

    const dispatch = useAppDispatch()
    const photoKeys = useAppSelector((state) => state.photos.photoKeys)
    
    useEffect(() => { void dispatch(fetchPhotos()) }, [dispatch])

    return (
        <section className={styles.photos}>
            {photoKeys.map(key => (
                <article key={key} className={styles.tile}>
                    <ImageLoader src={OBJECT_STORE_ASSETS_URL + key} />
                </article>
            ))}
        </section>
    )
}

export default Photos
