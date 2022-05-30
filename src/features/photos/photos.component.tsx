import { FC, useState, useEffect } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { ImageLightbox } from '~/src/common/imageLightbox/imageLightbox.component'

import { fetchPhotos } from './photos.slice'

import styles from './photos.module.scss'

const Photos: FC = () => {

    const dispatch = useAppDispatch()
    const dispatchFetchPhotos = () => { void dispatch(fetchPhotos()) }
    const photoSets = useAppSelector((state) => state.photos.photoSets)

    const [numberOfPhotosVisible, setNumberOfPhotosVisible] = useState(9)

    const hasNextPage = numberOfPhotosVisible <= photoSets.length

    const [sentryRef] = useInfiniteScroll({
        loading: false,
        delayInMs: 0,
        rootMargin: '0px 0px 900px 0px',
        hasNextPage,
        onLoadMore: () => setNumberOfPhotosVisible(numberOfPhotosVisible + 3),
    })

    useEffect(() => dispatchFetchPhotos(), [dispatch])

    return (
        <section className={styles.photos}>
            {photoSets.slice(0, numberOfPhotosVisible).map((photoSet, index) => (
                <article key={index} className={styles.tile}>
                    <ImageLightbox aspect={1/1} {...photoSet} className={styles.photo} />
                </article>
            ))}
            { hasNextPage && <div ref={sentryRef} /> }
        </section>
    )
}

export default Photos
