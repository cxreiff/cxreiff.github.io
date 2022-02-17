import { useRef, useState, useCallback, useEffect } from 'react'

export const useMeasuredRef = () => {
    const ref = useRef<HTMLElement | null>(null)
    const [rect, setRect] = useState<DOMRect | undefined>(undefined)

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node) {
            ref.current = node
            setRect(node.getBoundingClientRect())
        }
    }, [])

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
    }, [])

    return [ref, setRef, rect] as const
}
