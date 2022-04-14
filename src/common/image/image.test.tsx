import { render, fireEvent } from '@testing-library/preact'

import { Image } from './image.component'

test('should render', () => {
    const { container, getByAltText } = render(
        <Image
            aspect={800/600}
            alt={'test image'}
            source={'test'}
        />
    )

    expect(getByAltText('test image')).toBeInTheDocument()
    expect(container.firstElementChild?.className).toContain('hidden')
    expect(container).toMatchSnapshot()
})

test('should unhide on image load', () => {
    const { container, getByAltText } = render(
        <Image
            aspect={800/600}
            source={'test'}
            alt={'test image'}
        />
    )

    fireEvent.load(getByAltText('test image'))

    expect(container.firstElementChild?.className).not.toContain('hidden')
    expect(container).toMatchSnapshot()
})
