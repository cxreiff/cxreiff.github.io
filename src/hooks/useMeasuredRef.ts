import { useRef, useState, useEffect } from 'react'

export function useMeasuredRef<T extends HTMLElement>() {
    const ref = useRef<T | null>(null)
    const [rect, setRect] = useState<DOMRect>(new DOMRect())

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            entries.map(entry => {
                setRect(entry.target.getBoundingClientRect())
            })
        })

        if(ref.current) {
            resizeObserver.observe(ref.current)
        }
        return () => resizeObserver.disconnect()
    }, [ref.current])

    return [ref, rect] as const
}
