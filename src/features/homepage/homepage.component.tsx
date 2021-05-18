import { h } from 'preact'

import { useAppSelector, useAppDispatch } from 'src/app/store'
import sum from 'src/utilities/sum'

import { increment } from './homepage.slice'

const Homepage: React.FC = () => {

    const dispatch = useAppDispatch()
    const counter = useAppSelector((state) => state.homepage.counter)

    return (
        <h1 onClick={() => dispatch(increment({interval: 2}))}>
            Hello world! 12 + { counter } = { sum(5, counter) }
        </h1>
    )
}

export default Homepage
