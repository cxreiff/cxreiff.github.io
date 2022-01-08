import { FC, useState, useEffect } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import { ImageLoader } from '~/src/common/imageLoader/imageLoader.component'

import { fetchPhotos } from './photos.slice'

import * as styles from './photos.module.scss'

const Photos: FC = () => {

    const dispatch = useAppDispatch()
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

    useEffect(() => { void dispatch(fetchPhotos()) }, [dispatch])

    return (
        <section className={styles.photos}>
            {photoSets.slice(0, numberOfPhotosVisible).map((photoSet, index) => (
                <article key={index} className={styles.tile}>
                    <ImageLoader {...photoSet} />
                </article>
            ))}
            { hasNextPage && <div ref={sentryRef} /> }
        </section>
    )
}

export default Photos
