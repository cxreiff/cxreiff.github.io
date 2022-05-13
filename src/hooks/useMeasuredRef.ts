import { useRef, useState, useCallback, useEffect } from 'react'

export const useMeasuredRef = () => {
    const ref = useRef<HTMLElement | null>(null)
    const [rect, setRect] = useState<DOMRect>(new DOMRect())

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node) {
            ref.current = node
            setRect(node.getBoundingClientRect())
        }
    }, [])

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            entries.map(entry => {
                console.log('observer', entry, entry.target.getBoundingClientRect(), rect)
                setRect(entry.target.getBoundingClientRect())
                console.log('observer', entry, entry.target.getBoundingClientRect(), rect)
            })
        })

        if(ref.current) {
            resizeObserver.observe(ref.current)
        }
        return () => resizeObserver.disconnect()
    }, [])

    return [ref, setRef, rect] as const
}
