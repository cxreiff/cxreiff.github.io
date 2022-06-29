import { FC } from 'react'

export const Filters: FC = () => {
    return (
        <>
            <Turbulence />
        </>
    )
}

const Turbulence = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
        <defs>
            <filter id="turbulence_0">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_1">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_2">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_3">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_4">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_5">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="5" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_6">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="6" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
            <filter id="turbulence_7">
                <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="7" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
        </defs> 
    </svg>
)
