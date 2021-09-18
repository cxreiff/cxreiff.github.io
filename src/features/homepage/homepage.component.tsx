import React from 'react'

import { useAppSelector, useAppDispatch } from '~/src/app/store'
import sum from '~/src/utilities/sum'

import { increment, decrement } from './homepage.slice'

const Homepage: React.FC = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector((state) => state.homepage.counter)

    return (
        <section>
            <header>
                <h2>Homepage</h2>
            </header>
            <p>
                Count is { sum(1, counter) }
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
