import { render, fireEvent } from '@testing-library/preact'

import { ImageLightbox } from './imageLightbox.component'

test('should render', () => {
    const { container } = render(
        <ImageLightbox
            aspect={800/600}
            small={'test'}
            medium={'test'}
            large={'test'}
            alt={'test image'}
        />
    )

    expect(container).toMatchSnapshot()
})

test('should open lightbox', () => {
    const { container, getByAltText } = render(
        <ImageLightbox
            aspect={800/600}
            small={'test'}
            medium={'test'}
            large={'test'}
            alt={'test image'}
        />
    )

    fireEvent.click(getByAltText('test image'))

    expect(container).toMatchSnapshot()
})
