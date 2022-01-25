import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '~/src/app/store'

import { increment, decrement } from './homepage.slice'

import * as styles from './homepage.module.scss'

const Homepage: FC = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector((state) => state.homepage.counter)

    return (
        <section className={styles.homepage}>
            <header>
                <h2>
                    Homepage
                </h2>
            </header>
            <p>
                Count is {counter}.
            </p>
            <button onClick={() => dispatch(increment({interval: 2}))}>
              INCREMENT
            </button>
            <button onClick={() => dispatch(decrement({interval: 2}))}>
              DECREMENT
            </button>
        </section>
    )
}

export default Homepage
